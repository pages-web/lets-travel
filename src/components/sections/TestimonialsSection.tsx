import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionCard } from "@/components/motion/MotionCard";
import Image from "@/components/common/Image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The Gobi trip exceeded every expectation. Our guide felt like family by day three.",
    author: "Sarah, USA",
    tour: "Gobi Desert Expedition",
    image: "/images/testimonial-sarah.jpg",
  },
  {
    quote: "Seamless from first inquiry to farewell. The Naadam access alone was worth it.",
    author: "Min-jun, Korea",
    tour: "Naadam Festival Tour",
    image: "/images/testimonial-minjun.jpg",
  },
  {
    quote: "Lake Khovsgol was magic. Clean camps, great food, and genuine hospitality.",
    author: "Anna, Germany",
    tour: "Lake Khovsgol Escape",
    image: "/images/testimonial-anna.jpg",
  },
];

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl text-center md:mx-auto">
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

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.author} direction="up" delay={index * 0.1}>
              <MotionCard className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-8">
                  <Quote className="mb-4 h-8 w-8 text-primary/30" />
                  <blockquote className="text-base leading-relaxed text-foreground">
                    “{item.quote}”
                  </blockquote>
                  <p className="mt-6 text-sm font-semibold text-foreground">
                    {item.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.tour}</p>
                </div>
              </MotionCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
