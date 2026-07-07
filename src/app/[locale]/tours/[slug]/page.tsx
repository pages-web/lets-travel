import type { Metadata } from "next";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_POST } from "@/graphql/cms/queries/post";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import Image from "@/components/common/Image";
import TourBookingForm from "@/components/sections/TourBookingForm";
import { TOURS, getTourBySlug } from "@/lib/data/tours";
import type { Post } from "@/graphql/cms/queries/post";
import { CalendarDays, Clock, CheckCircle2 } from "lucide-react";

interface TourDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};

  const client = await getServerApolloClient(false);
  const { data } = await client.query({
    query: CP_POST,
    variables: { slug, language: (await params).locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  }).catch(() => ({ data: undefined }));

  const typedData = data as { cpPost?: Post | null } | undefined;
  const post: Post | null = typedData?.cpPost ?? null;

  return {
    title: `${post?.title ?? tour.title} | Let's Travel Mongolia`,
    description: post?.excerpt ?? tour.excerpt ?? undefined,
  };
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    TOURS.map((tour) => ({ locale, slug: tour.slug }))
  );
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { locale, slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const client = await getServerApolloClient(false);
  const { data } = await client.query({
    query: CP_POST,
    variables: { slug, language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  }).catch(() => ({ data: undefined }));

  const typedData = data as { cpPost?: Post | null } | undefined;
  const post: Post | null = typedData?.cpPost ?? null;

  const inclusions = [
    "Local English-speaking guide",
    "4WD vehicle with driver",
    "Ger camp and tent accommodation",
    "All meals during the tour",
    "National park entrance fees",
    "Airport transfers in Ulaanbaatar",
  ];

  return (
    <article className="bg-background pb-20">
      <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px] lg:h-[620px]">
        <Image
          src={tour.image}
          alt={post?.title ?? tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground shadow-lg">
              <Clock className="h-4 w-4" />
              {tour.duration} DAYS • FROM ${tour.basePrice.toLocaleString()}
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {post?.title ?? tour.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <div className="space-y-10">
          <section className="rounded-2xl bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{post?.excerpt || tour.excerpt}</p>
            {post?.content && (
              <div
                className="prose prose-lg mt-6 max-w-none text-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            )}
          </section>

          {tour.highlights.length > 0 && (
            <section className="rounded-2xl bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground">Highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {tour.itinerary.length > 0 && (
            <section className="rounded-2xl bg-card p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-2">
                <CalendarDays className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Day-by-day itinerary</h2>
              </div>
              <div className="relative space-y-0">
                <div className="absolute left-[19px] top-3 bottom-3 w-px bg-border" />
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="relative flex gap-5 pb-8 last:pb-0">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {day.day}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{day.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="rounded-2xl bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground">What is included</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {inclusions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <TourBookingForm slug={slug} title={post?.title ?? tour.title} basePrice={tour.basePrice} />

          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h3 className="text-lg font-bold text-foreground">Need help?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our team can customize dates, group size, or combine multiple tours.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact us
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
