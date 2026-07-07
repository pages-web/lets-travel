import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionCard } from "@/components/motion/MotionCard";
import Image from "@/components/common/Image";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    slug: "how-to-pack-for-mongolia",
    title: "How to Pack for Mongolia",
    excerpt: "Practical gear advice from guides who have crossed every dune.",
    image: "/images/blog-pack.jpg",
    date: "Mar 12, 2026",
  },
  {
    slug: "top-mongolian-dishes",
    title: "Top 5 Mongolian Dishes to Try",
    excerpt: "From buuz to airag, discover the flavors that fuel nomadic life.",
    image: "/images/blog-food.jpg",
    date: "Feb 28, 2026",
  },
  {
    slug: "gobi-desert-expedition",
    title: "Gobi Desert Expedition",
    excerpt: "Eight days across the Gobi's flaming cliffs, singing dunes, and hidden canyons.",
    image: "/images/tour-gobi.jpg",
    date: "Feb 15, 2026",
  },
];

export default function BlogPreviewSection() {
  const t = useTranslations("blog");

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <FadeIn direction="up">
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                {t("eyebrow")}
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.05}>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {t("title")}
              </h2>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.1}>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              {t("viewAll")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} direction="up" delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <MotionCard className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-foreground">{post.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                      {t("readMore")}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </MotionCard>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
