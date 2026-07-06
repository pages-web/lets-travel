import type { Metadata } from "next";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES } from "@/graphql/cms/queries/page";
import { CP_POSTS } from "@/graphql/cms/queries/post";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import type { Page } from "@/graphql/cms/queries/page";
import type { Post } from "@/graphql/cms/queries/post";
import TourCard from "@/components/sections/TourCard";
import BlogCard from "@/components/sections/BlogCard";
import PageHeader from "@/components/sections/PageHeader";

interface CmsPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const pageHeaderImages: Record<string, string> = {
  about: "/images/about-team.jpg",
  contact: "/images/contact-landscape.jpg",
  services: "/images/tours-header.jpg",
  blog: "/images/blog-header.jpg",
  faq: "/images/blog-header.jpg",
  privacy: "/images/contact-landscape.jpg",
};

export async function generateMetadata({ params }: CmsPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const client = await getServerApolloClient();
  const { data } = await client.query({
    query: CP_PAGES,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });
  const typedData = data as { cpPages?: Page[] } | undefined;
  const pages: Page[] = typedData?.cpPages ?? [];
  const page = pages.find((p) => p.slug === slug);
  if (!page) return {};

  return {
    title: `${page.name} | Let's Travel Mongolia`,
    description: page.description ?? undefined,
    openGraph: {
      title: page.name,
      description: page.description ?? undefined,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const client = await getServerApolloClient(false);
  const results = await Promise.all(
    routing.locales.map(async (locale) => {
      const { data } = await client.query({
        query: CP_PAGES,
        variables: { language: locale },
        context: { fetchOptions: { next: { revalidate: 60 } } },
      });
      const typedData = data as { cpPages?: Page[] } | undefined;
      const pages: Page[] = typedData?.cpPages ?? [];
      return pages.map((page) => ({ locale, slug: page.slug ?? "" }));
    })
  );
  return results.flat();
}

export default async function CmsPage({ params }: CmsPageProps) {
  const { locale, slug } = await params;
  const client = await getServerApolloClient();

  const [{ data: pagesData }, { data: postsData }] = await Promise.all([
    client.query({
      query: CP_PAGES,
      variables: { language: locale },
      context: { fetchOptions: { next: { revalidate: 60 } } },
    }),
    client.query({
      query: CP_POSTS,
      variables: { language: locale, status: "published" as const, limit: 100 },
      context: { fetchOptions: { next: { revalidate: 60 } } },
    }),
  ]);

  const typedPagesData = pagesData as { cpPages?: Page[] } | undefined;
  const pages: Page[] = typedPagesData?.cpPages ?? [];
  const page = pages.find((p) => p.slug === slug);
  if (!page) notFound();

  const typedPostsData = postsData as { cpPosts?: Post[] } | undefined;
  const posts: Post[] = typedPostsData?.cpPosts ?? [];

  return (
    <article className="bg-background pb-20">
      <PageHeader
        label={slug.toUpperCase()}
        title={page.name ?? slug}
        subtitle={page.description ?? undefined}
        image={pageHeaderImages[slug]}
      />

      {page.content && (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      )}

      {slug === "services" && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground">Featured Tours</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts
                .filter((p) => p.categories?.some((c) => c.slug === "tours" || c.slug === "services"))
                .map((post) => (
                  <TourCard key={post._id} post={post} />
                ))}
            </div>
          </div>
        </section>
      )}

      {slug === "blog" && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
