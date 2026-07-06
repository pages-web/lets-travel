import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionButton } from "@/components/motion/MotionButton";
import Image from "@/components/common/Image";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mongolia.jpg"
          alt="Mongolia landscape"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl flex-col justify-center px-4 py-32 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <span className="mb-4 text-sm font-bold tracking-[0.2em] text-primary">
            {t("eyebrow")}
          </span>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t("subtitle")}
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/tours">
              <MotionButton className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90">
                {t("exploreTours")}
              </MotionButton>
            </Link>
            <Link href="/contact">
              <MotionButton className="rounded-md border border-foreground bg-transparent px-8 py-4 text-base font-semibold text-foreground hover:bg-foreground/5">
                {t("tailorMade")}
              </MotionButton>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
