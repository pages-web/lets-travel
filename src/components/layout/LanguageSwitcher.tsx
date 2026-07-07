"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTransition, useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const LABELS: Record<string, string> = {
  en: "English",
  mn: "Монгол",
  zh: "中文",
  ru: "Русский",
  ko: "한국어",
  ja: "日本語",
};

const FLAGS: Record<string, string> = {
  en: "🇺🇸",
  mn: "🇲🇳",
  zh: "🇨🇳",
  ru: "🇷🇺",
  ko: "🇰🇷",
  ja: "🇯🇵",
};

export function LanguageSwitcher({ locales }: { locales: readonly string[] }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLanguage(nextLocale: string) {
    if (nextLocale === locale) {
      setOpen(false);
      return;
    }

    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const newPath = segments.join("/");

    startTransition(() => {
      router.push(newPath);
    });
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        disabled={isPending}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground transition-all hover:bg-muted hover:shadow-sm disabled:opacity-50"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span>{FLAGS[locale]}</span>
        <span className="hidden sm:inline">{LABELS[locale]}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-card p-1 shadow-xl"
          role="listbox"
        >
          {locales.map((l) => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button
                type="button"
                onClick={() => switchLanguage(l)}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-muted ${l === locale ? "bg-muted font-semibold" : "text-foreground"}`}
              >
                <span>{FLAGS[l]}</span>
                <span>{LABELS[l]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
