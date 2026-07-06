import type { Metadata } from "next";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES } from "@/graphql/cms/queries/page";
import { CP_POSTS } from "@/graphql/cms/queries/post";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import PageHeader from "@/components/sections/PageHeader";
import TourCard from "@/components/sections/TourCard";
import type { Page } from "@/graphql/cms/queries/page";
import type { Post } from "@/graphql/cms/queries/post";

export const metadata: Metadata = {
  title: "Tours | Let's Travel Mongolia",
  description: "Handcrafted journeys across the Gobi, steppes, and nomadic heartland of Mongolia.",
};

export default async function ToursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const client = await getServerApolloClient(false);

  const [{ data: pagesData }, { data: postsData }] = await Promise.all([
    client.query({
      query: CP_PAGES,
      variables: { language: locale },
      context: { fetchOptions: { next: { revalidate: 60 } } },
    }),
    client.query({
      query: CP_POSTS,
      variables: { language: locale, status: "published" as const, limit: 50 },
      context: { fetchOptions: { next: { revalidate: 60 } } },
    }),
  ]);

  const typedPagesData = pagesData as { cpPages?: Page[] } | undefined;
  const pages: Page[] = typedPagesData?.cpPages ?? [];
  const toursPage = pages.find((p) => p.slug === "tours" || p.slug === "services");

  const typedPostsData = postsData as { cpPosts?: Post[] } | undefined;
  const posts: Post[] = typedPostsData?.cpPosts ?? [];
  const tours = posts.filter((p) => p.categories?.some((c) => c.slug === "tours" || c.slug === "services"));

  if (tours.length === 0) {
    return (
      <>
        <PageHeader
          label="OUR TOURS"
          title="Handcrafted journeys across Mongolia"
          subtitle="Filter by duration, activity, or theme and find the trip that matches your spirit of adventure."
          image="/images/tours-header.jpg"
        />
        <section className="py-20 text-center">
          <p className="text-muted-foreground">No tours available yet.</p>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        label="OUR TOURS"
        title={toursPage?.name || "Handcrafted journeys across Mongolia"}
        subtitle={toursPage?.description || "Find the trip that matches your spirit of adventure."}
        image="/images/tours-header.jpg"
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour._id} post={tour} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
