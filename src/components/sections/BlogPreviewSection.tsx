import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { MotionCard } from "@/components/motion/MotionCard";
import Image from "@/components/common/Image";

const posts = [
  {
    slug: "best-time-to-visit-mongolia",
    title: "Best time to visit Mongolia",
    excerpt: "A month-by-month guide to weather, festivals, and wildlife.",
    image: "/images/blog-time.jpg",
  },
  {
    slug: "what-to-pack-for-the-gobi",
    title: "What to pack for the Gobi",
    excerpt: "Practical gear advice from guides who have crossed every dune.",
    image: "/images/blog-pack.jpg",
  },
  {
    slug: "mongolian-culture-guide",
    title: "Mongolian culture guide",
    excerpt: "Customs, greetings, and etiquette for respectful travel.",
    image: "/images/blog-culture.jpg",
  },
];

export default function BlogPreviewSection() {
  const t = useTranslations("blog");

  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <FadeIn direction="up">
            <span className="mb-3 inline-block text-sm font-bold tracking-[0.2em] text-primary">
              {t("eyebrow")}
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.05}>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
          </FadeIn>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} direction="up" delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <MotionCard className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground">{post.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
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
