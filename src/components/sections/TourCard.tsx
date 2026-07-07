import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "@/components/common/Image";
import { ArrowRight, Clock } from "lucide-react";
import type { Tour } from "@/lib/data/tours";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const t = useTranslations("tours");

  return (
    <Link href={`/tours/${tour.slug}`}>
      <article className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
            <Clock className="h-3.5 w-3.5 text-primary" />
            {tour.duration} {t("days")}
          </div>
          <div className="absolute bottom-4 right-4 rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground shadow-lg">
            ${tour.basePrice.toLocaleString()}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground">{tour.title}</h3>
          {tour.excerpt && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {tour.excerpt}
            </p>
          )}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all group-hover:bg-primary/90">
            {t("viewTour")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  );
}
