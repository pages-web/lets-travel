import { Link } from "@/i18n/routing";
import Image from "@/components/common/Image";
import { ArrowRight } from "lucide-react";
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
      <article className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          {excerpt && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {excerpt}
            </p>
          )}
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">
            <span className="h-px w-6 rounded-full bg-primary transition-all group-hover:w-10" />
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
}
