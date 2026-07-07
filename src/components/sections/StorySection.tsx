import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionButton } from "@/components/motion/MotionButton";
import Image from "@/components/common/Image";
import { ArrowRight } from "lucide-react";

export default function StorySection() {
  const t = useTranslations("story");

  return (
    <section className="bg-secondary/30 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <FadeIn direction="up">
          <div className="space-y-6">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              {t("eyebrow")}
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("body")}
            </p>
            <Link href="/about">
              <MotionButton className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5">
                {t("cta")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MotionButton>
            </Link>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-xl">
              <Image
                src="/images/story-mongolia.jpg"
                alt="Mongolia landscape"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg lg:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm opacity-90">Years exploring Mongolia</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
