import type { Metadata } from "next";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_POSTS } from "@/graphql/cms/queries/post";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import PageHeader from "@/components/sections/PageHeader";
import BlogCard from "@/components/sections/BlogCard";
import type { Post } from "@/graphql/cms/queries/post";

export const metadata: Metadata = {
  title: "Journal | Let's Travel Mongolia",
  description: "Travel tips, stories, and guides for your Mongolia adventure.",
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const client = await getServerApolloClient(false);
  const { data } = await client.query({
    query: CP_POSTS,
    variables: { language: locale, status: "published" as const, limit: 50 },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const typedData = data as { cpPosts?: Post[] } | undefined;
  const posts: Post[] = typedData?.cpPosts ?? [];

  return (
    <>
      <PageHeader
        label="JOURNAL"
        title="Travel tips, stories, and guides"
        subtitle="Practical advice and inspiration for your Mongolia adventure."
        image="/images/blog-header.jpg"
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">No articles yet.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
