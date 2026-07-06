import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionButton } from "@/components/motion/MotionButton";

export default function FinalCTA() {
  const t = useTranslations("cta");

  return (
    <section className="bg-gradient-to-b from-primary to-[#92400E] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <p className="mt-4 text-lg text-primary-foreground/90">
            {t("subtitle")}
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <Link href="/contact" className="mt-8 inline-block">
            <MotionButton className="rounded-md bg-white px-8 py-4 text-base font-bold text-[#92400E] hover:bg-white/90">
              {t("button")}
            </MotionButton>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
