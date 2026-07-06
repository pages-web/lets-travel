"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

const LABELS: Record<string, string> = {
  en: "EN",
  mn: "МН",
  zh: "中",
  ru: "РУ",
  ko: "한",
  ja: "日",
};

export function LanguageSwitcher({ locales }: { locales: readonly string[] }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-sm">
      {locales.map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={
            l === locale
              ? "font-bold text-foreground"
              : "text-muted-foreground hover:text-foreground transition-colors"
          }
        >
          {LABELS[l] ?? l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
