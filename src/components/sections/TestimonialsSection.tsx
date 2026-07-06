import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionCard } from "@/components/motion/MotionCard";

const testimonials = [
  {
    quote: "The Gobi trip exceeded every expectation. Our guide felt like family by day three.",
    author: "Sarah, USA",
    tour: "Gobi Desert Expedition",
  },
  {
    quote: "Seamless from first inquiry to farewell. The Naadam access alone was worth it.",
    author: "Min-jun, Korea",
    tour: "Naadam Festival Tour",
  },
  {
    quote: "Lake Khovsgol was magic. Clean camps, great food, and genuine hospitality.",
    author: "Anna, Germany",
    tour: "Lake Khovsgol Escape",
  },
];

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="bg-card py-20 lg:py-24">
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

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.author} direction="up" delay={index * 0.1}>
              <MotionCard className="h-full rounded-2xl bg-background p-8">
                <blockquote className="text-base leading-relaxed text-foreground">
                  “{item.quote}”
                </blockquote>
                <p className="mt-6 text-sm text-muted-foreground">
                  — {item.author} • {item.tour}
                </p>
              </MotionCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
