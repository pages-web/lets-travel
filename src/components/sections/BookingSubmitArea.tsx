"use client";

import { useAuth } from "@/lib/auth/AuthContext";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { MotionButton } from "@/components/motion/MotionButton";
import { Users } from "lucide-react";

export function BookingSubmitArea({ title }: { title: string }) {
  const { user, loading } = useAuth();
  const t = useTranslations("booking");

  if (loading) {
    return <div className="h-12 w-full animate-pulse rounded-full bg-muted" />;
  }

  if (!user) {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-lg bg-secondary p-3 text-sm text-muted-foreground">
          <Users className="h-5 w-5 shrink-0 text-primary" />
          {t("loginToBookDesc")}
        </div>
        <Link
          href="/login"
          className="block w-full rounded-full bg-primary py-3.5 text-center text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {t("loginToBook")}
        </Link>
      </div>
    );
  }

  return (
    <MotionButton
      type="submit"
      className="w-full rounded-full bg-primary py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90"
    >
      {t("sendBookingRequest")}
    </MotionButton>
  );
}
