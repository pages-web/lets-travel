import { FadeIn } from "@/components/motion/FadeIn";
import Image from "@/components/common/Image";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHeader({ label, title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <span className="mb-3 inline-block text-sm font-bold tracking-[0.2em] text-primary">
            {label}
          </span>
        </FadeIn>
        <FadeIn direction="up" delay={0.05}>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </FadeIn>
        {subtitle && (
          <FadeIn direction="up" delay={0.1}>
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
