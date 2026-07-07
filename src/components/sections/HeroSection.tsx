import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionButton } from "@/components/motion/MotionButton";
import Image from "@/components/common/Image";
import { MapPin, Users, Award } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mongolia.jpg"
          alt="Mongolia landscape"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/50 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(160,86,8,0.08),_transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl flex-col justify-center px-4 py-32 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0}>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            <MapPin className="h-3.5 w-3.5" />
            {t("eyebrow")}
          </span>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t("subtitle")}
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link href="/tours">
              <MotionButton className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30 hover:-translate-y-0.5">
                {t("exploreTours")}
              </MotionButton>
            </Link>
            <Link href="/contact">
              <MotionButton className="rounded-full border border-foreground/20 bg-white/60 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-white/80 hover:-translate-y-0.5">
                {t("tailorMade")}
              </MotionButton>
            </Link>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.45}>
          <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { icon: Award, label: "15+ years", desc: "Experience" },
              { icon: Users, label: "12,000+", desc: "Happy travelers" },
              { icon: MapPin, label: "40+", desc: "Unique routes" },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <stat.icon className="mb-2 h-5 w-5 text-primary" />
                <p className="text-2xl font-bold text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
