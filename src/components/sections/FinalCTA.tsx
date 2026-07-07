import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionButton } from "@/components/motion/MotionButton";
import Image from "@/components/common/Image";

export default function FinalCTA() {
  const t = useTranslations("cta");

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-landscape.jpg"
          alt="Mongolia landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.1}>
          <p className="mt-4 text-lg text-white/90">
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
