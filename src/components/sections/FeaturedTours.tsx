import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionCard } from "@/components/motion/MotionCard";
import Image from "@/components/common/Image";

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
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <FadeIn direction="up">
            <span className="mb-3 inline-block text-sm font-bold tracking-[0.2em] text-primary">
              {t("eyebrow")}
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.05}>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
          </FadeIn>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <FadeIn key={tour.slug} direction="up" delay={index * 0.1}>
              <Link href={`/tours/${tour.slug}`}>
                <MotionCard className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground">{tour.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tour.duration} {t("days")} • {t("from")} ${tour.price.toLocaleString()}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {tour.description}
                    </p>
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
