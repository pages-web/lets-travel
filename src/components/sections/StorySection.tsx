import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionButton } from "@/components/motion/MotionButton";
import Image from "@/components/common/Image";

export default function StorySection() {
  const t = useTranslations("story");

  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <FadeIn direction="up">
          <div className="space-y-6">
            <span className="text-sm font-bold tracking-[0.2em] text-primary">
              {t("eyebrow")}
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("body")}
            </p>
            <Link href="/about">
              <MotionButton className="rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                {t("cta")}
              </MotionButton>
            </Link>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
            <Image
              src="/images/story-mongolia.jpg"
              alt="Mongolia landscape"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
