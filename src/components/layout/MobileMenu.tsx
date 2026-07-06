"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { routing } from "@/i18n/routing";
import type { MenuItem } from "@/graphql/cms/queries/menu";

export function MobileMenu({ items }: { items: MenuItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-md p-2 text-foreground"
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-20 border-b border-border bg-background p-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            {items.map((item) => (
              <Link
                key={item._id}
                href={item.url || "/"}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border pt-4">
              <LanguageSwitcher locales={routing.locales} />
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-md bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Plan My Trip
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
