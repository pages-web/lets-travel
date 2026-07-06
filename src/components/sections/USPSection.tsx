import { Compass, Sparkles, Leaf, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionCard } from "@/components/motion/MotionCard";

export default function USPSection() {
  const t = useTranslations("usp");

  const items = [
    {
      icon: Compass,
      title: t("localGuides"),
      description: t("localGuidesDesc"),
    },
    {
      icon: Sparkles,
      title: t("tailorMade"),
      description: t("tailorMadeDesc"),
    },
    {
      icon: Leaf,
      title: t("sustainable"),
      description: t("sustainableDesc"),
    },
    {
      icon: Shield,
      title: t("safety"),
      description: t("safetyDesc"),
    },
  ];

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

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <FadeIn key={item.title} direction="up" delay={index * 0.08}>
              <MotionCard className="rounded-xl bg-background p-8">
                <item.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </MotionCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
