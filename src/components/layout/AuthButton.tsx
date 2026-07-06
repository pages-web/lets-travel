"use client";

import { useAuth } from "@/lib/auth/AuthContext";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export function AuthButton() {
  const { user, logout, loading } = useAuth();
  const t = useTranslations("auth");

  if (loading) return null;

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/account"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {t("account")}
        </Link>
        <button
          onClick={logout}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {t("logout")}
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/login"
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      {t("login")}
    </Link>
  );
}
