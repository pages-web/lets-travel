import { Compass, Sparkles, Leaf, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionCard } from "@/components/motion/MotionCard";
import Image from "@/components/common/Image";

export default function USPSection() {
  const t = useTranslations("usp");

  const items = [
    {
      icon: Compass,
      title: t("localGuides"),
      description: t("localGuidesDesc"),
      image: "/images/usp-guides.jpg",
    },
    {
      icon: Sparkles,
      title: t("tailorMade"),
      description: t("tailorMadeDesc"),
      image: "/images/usp-camp.jpg",
    },
    {
      icon: Leaf,
      title: t("sustainable"),
      description: t("sustainableDesc"),
      image: "/images/usp-nature.jpg",
    },
    {
      icon: Shield,
      title: t("safety"),
      description: t("safetyDesc"),
      image: "/images/usp-safety.jpg",
    },
  ];

  return (
    <section className="bg-background py-24 lg:py-32">
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

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <FadeIn key={item.title} direction="up" delay={index * 0.08}>
              <MotionCard className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[16/7] overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="px-6 pb-8 pt-4">
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </MotionCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
