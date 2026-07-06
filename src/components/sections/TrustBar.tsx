import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

export default function TrustBar() {
  const t = useTranslations("trust");

  const stats = [
    { value: "18+", label: t("years") },
    { value: "12K+", label: t("travelers") },
    { value: "4.9", label: t("rating") },
    { value: "100%", label: t("experts") },
  ];

  return (
    <section className="bg-card py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} direction="up" delay={index * 0.05}>
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl font-extrabold text-foreground">{stat.value}</span>
                <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
