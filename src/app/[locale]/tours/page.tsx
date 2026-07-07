import type { Metadata } from "next";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES } from "@/graphql/cms/queries/page";
import { routing } from "@/i18n/routing";
import PageHeader from "@/components/sections/PageHeader";
import TourCard from "@/components/sections/TourCard";
import { TOURS } from "@/lib/data/tours";
import type { Page } from "@/graphql/cms/queries/page";

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

  const { data: pagesData } = await client.query({
    query: CP_PAGES,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const typedPagesData = pagesData as { cpPages?: Page[] } | undefined;
  const pages: Page[] = typedPagesData?.cpPages ?? [];
  const toursPage = pages.find((p) => p.slug === "tours" || p.slug === "services");

  return (
    <>
      <PageHeader
        label="OUR TOURS"
        title={toursPage?.name || "Handcrafted journeys across Mongolia"}
        subtitle={toursPage?.description || "Find the trip that matches your spirit of adventure."}
        image="/images/tours-header.jpg"
      />
      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TOURS.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
