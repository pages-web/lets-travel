import type { Metadata } from "next";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES } from "@/graphql/cms/queries/page";
import PageHeader from "@/components/sections/PageHeader";
import Image from "@/components/common/Image";
import type { Page } from "@/graphql/cms/queries/page";

export const metadata: Metadata = {
  title: "About Us | Let's Travel Mongolia",
  description: "Two decades of crafting unforgettable journeys with local expertise and global standards.",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const client = await getServerApolloClient();
  const { data } = await client.query({
    query: CP_PAGES,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const typedData = data as { cpPages?: Page[] } | undefined;
  const pages: Page[] = typedData?.cpPages ?? [];
  const aboutPage = pages.find((p) => p.slug === "about");

  return (
    <>
      <PageHeader
        label="ABOUT US"
        title={aboutPage?.name || "Mongolia's most trusted travel partner"}
        subtitle={aboutPage?.description || "Local expertise and global standards since 2008."}
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-foreground">Our story</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Let&apos;s Travel was founded by Mongolian guides who believed travelers deserved more authentic, responsible, and carefully planned journeys. What started as a small team has grown into a trusted operator serving thousands of guests each year.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We work directly with local communities, train our own guides, and obsess over every detail so you can focus on the experience.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
            <Image
              src="/images/about-team.jpg"
              alt="Let's Travel team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground">Our values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Authenticity", desc: "Real connections with local people and places." },
              { title: "Responsibility", desc: "We protect landscapes and support communities." },
              { title: "Craftsmanship", desc: "Every itinerary is built with care and expertise." },
            ].map((value) => (
              <div key={value.title} className="rounded-xl bg-background p-8">
                <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {aboutPage?.content && (
        <section className="bg-background py-20">
          <div
            className="prose prose-lg mx-auto max-w-3xl px-4 text-foreground"
            dangerouslySetInnerHTML={{ __html: aboutPage.content }}
          />
        </section>
      )}
    </>
  );
}
