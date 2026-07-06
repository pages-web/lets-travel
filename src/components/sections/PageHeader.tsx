import { FadeIn } from "@/components/motion/FadeIn";

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ label, title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
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
