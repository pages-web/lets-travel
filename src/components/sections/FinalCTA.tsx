import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionButton } from "@/components/motion/MotionButton";
import Image from "@/components/common/Image";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-landscape.jpg"
          alt="Mongolia landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
            {t("eyebrow")}
          </span>
        </FadeIn>
        <FadeIn direction="up" delay={0.05}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <p className="mt-5 text-lg text-white/90">
            {t("subtitle")}
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <Link href="/contact" className="mt-10 inline-block">
            <MotionButton className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-lg shadow-black/10 transition-all hover:bg-white/90 hover:-translate-y-0.5">
              {t("button")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </MotionButton>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
