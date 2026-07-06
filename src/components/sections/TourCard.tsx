import { Link } from "@/i18n/routing";
import Image from "@/components/common/Image";
import type { Post } from "@/graphql/cms/queries/post";

interface TourCardProps {
  post: Post;
}

export default function TourCard({ post }: TourCardProps) {
  const title = post.title ?? "Untitled";
  const excerpt = post.excerpt ?? "";
  const image = post.thumbnail?.url ?? "/images/placeholder.png";
  const slug = post.slug ?? "";

  return (
    <Link href={`/tours/${slug}`}>
      <article className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          {excerpt && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {excerpt}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
