import type { Metadata } from "next";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_POST, CP_POSTS } from "@/graphql/cms/queries/post";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import Image from "@/components/common/Image";
import TourBookingForm from "@/components/sections/TourBookingForm";
import type { Post } from "@/graphql/cms/queries/post";

interface TourDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const tourMeta: Record<
  string,
  { duration: number; basePrice: number; image: string; highlights: string[] }
> = {
  "gobi-desert-expedition": {
    duration: 8,
    basePrice: 1890,
    image: "/images/tour-gobi.jpg",
    highlights: [
      "Flaming Cliffs of Bayanzag",
      "Singing dunes of Khongoryn Els",
      "Ice-filled Yolyn Am canyon",
      "Traditional ger camps under the stars",
    ],
  },
  "northern-mongolia-horse-trek": {
    duration: 10,
    basePrice: 2450,
    image: "/images/tour-khovsgol.jpg",
    highlights: [
      "Lake Khovsgol, the Blue Pearl",
      "Taiga forest camping",
      "Tsaatan reindeer herder visit",
      "Small-group horseback riding",
    ],
  },
  "naadam-festival-tour": {
    duration: 7,
    basePrice: 1650,
    image: "/images/tour-naadam.jpg",
    highlights: [
      "Ulaanbaatar national Naadam",
      "Rural provincial festival",
      "Wrestling, horse racing, archery",
      "July departure only",
    ],
  },
  "mongolia-photography-safari": {
    duration: 9,
    basePrice: 2150,
    image: "/images/tour-photo.jpg",
    highlights: [
      "Golden-hour landscape shoots",
      "Wild horses and eagle encounters",
      "Nomadic family portraits",
      "Pro guide tips on light and composition",
    ],
  },
};

export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
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
      return posts
        .filter((p) => p.categories?.some((c) => c.slug === "tours" || c.slug === "services"))
        .map((post) => ({ locale, slug: post.slug ?? "" }));
    })
  );
  return results.flat();
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
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

  const meta = tourMeta[slug] ?? {
    duration: 7,
    basePrice: 1500,
    image: post.thumbnail?.url ?? "/images/tours-header.jpg",
    highlights: [],
  };

  return (
    <article className="bg-background pb-20">
      <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px] lg:h-[600px]">
        <Image
          src={meta.image}
          alt={post.title ?? ""}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <span className="text-sm font-bold tracking-[0.2em] text-primary">{meta.duration} DAYS • FROM ${meta.basePrice.toLocaleString()}</span>
            <h1 className="mt-2 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <div className="space-y-10">
          <section className="rounded-2xl bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{post.excerpt}</p>
            {post.content && (
              <div
                className="prose prose-lg mt-6 max-w-none text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}
          </section>

          {meta.highlights.length > 0 && (
            <section className="rounded-2xl bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground">Highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {meta.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="rounded-2xl bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">What is included</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Local English-speaking guide",
                "4WD vehicle with driver",
                "Ger camp and tent accommodation",
                "All meals during the tour",
                "National park entrance fees",
                "Airport transfers in Ulaanbaatar",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <TourBookingForm slug={slug} title={post.title ?? ""} basePrice={meta.basePrice} />

          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h3 className="text-lg font-bold text-foreground">Need help?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our team can customize dates, group size, or combine multiple tours.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Contact us
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
