import type { Metadata } from "next";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_POST } from "@/graphql/cms/queries/post";
import { CP_POSTS } from "@/graphql/cms/queries/post";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Image from "@/components/common/Image";
import type { Post } from "@/graphql/cms/queries/post";

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const client = await getServerApolloClient(false);
  const { data } = await client.query({
    query: CP_POST,
    variables: { slug, language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const typedData = data as { cpPost?: Post | null } | undefined;
  const post: Post | null = typedData?.cpPost ?? null;
  if (!post) return {};

  return {
    title: `${post.title} | Let's Travel Mongolia`,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: "article",
      images: post.thumbnail?.url ? [{ url: post.thumbnail.url }] : [],
    },
  };
}

export async function generateStaticParams() {
  const client = await getServerApolloClient(false);
  const results = await Promise.all(
    routing.locales.map(async (locale) => {
      const { data } = await client.query({
        query: CP_POSTS,
        variables: { language: locale, status: "published" as const, limit: 100 },
        context: { fetchOptions: { next: { revalidate: 60 } } },
      });
      const typedData = data as { cpPosts?: Post[] } | undefined;
      const posts: Post[] = typedData?.cpPosts ?? [];
      return posts.map((post) => ({ locale, slug: post.slug ?? "" }));
    })
  );
  return results.flat();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const client = await getServerApolloClient(false);
  const { data } = await client.query({
    query: CP_POST,
    variables: { slug, language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const typedData = data as { cpPost?: Post | null } | undefined;
  const post: Post | null = typedData?.cpPost ?? null;
  if (!post) notFound();

  return (
    <article className="bg-background pb-20">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <span className="text-sm font-bold tracking-[0.2em] text-primary">TRAVEL GUIDE</span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        {post.publishedDate && (
          <p className="mt-4 text-sm text-muted-foreground">
            {new Date(post.publishedDate).toLocaleDateString(locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </div>

      {post.thumbnail?.url && (
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-muted">
            <Image
              src={post.thumbnail.url}
              alt={post.title ?? ""}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 lg:px-8">
        <div
          className="prose prose-lg max-w-none text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
        />
      </div>
    </article>
  );
}
