import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionCard } from "@/components/motion/MotionCard";
import Image from "@/components/common/Image";
import { Clock, ArrowRight } from "lucide-react";

const tours = [
  {
    slug: "gobi-desert-expedition",
    title: "Gobi Desert Expedition",
    duration: 8,
    price: 1890,
    description: "Cross the legendary Gobi by camel and 4x4, sleep under stars in traditional ger camps.",
    image: "/images/tour-gobi.jpg",
  },
  {
    slug: "naadam-festival-tour",
    title: "Naadam Festival Tour",
    duration: 10,
    price: 2450,
    description: "Experience Mongolia's ancient games with local guides in the heart of summer.",
    image: "/images/tour-naadam.jpg",
  },
  {
    slug: "lake-khovsgol-escape",
    title: "Lake Khovsgol Escape",
    duration: 7,
    price: 1650,
    description: "Blue pearl of Mongolia. Hiking, kayaking, and reindeer herder encounters.",
    image: "/images/tour-khovsgol.jpg",
  },
];

export default function FeaturedTours() {
  const t = useTranslations("tours");

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <FadeIn direction="up">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                {t("eyebrow")}
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.05}>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {t("title")}
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.1}>
            <Link
              href="/tours"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              {t("viewAll")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <FadeIn key={tour.slug} direction="up" delay={index * 0.1}>
              <Link href={`/tours/${tour.slug}`}>
                <MotionCard className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                      {tour.duration} {t("days")}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold text-foreground">{tour.title}</h3>
                      <span className="shrink-0 text-lg font-bold text-primary">
                        ${tour.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {tour.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
                      {t("explore")}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </MotionCard>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
