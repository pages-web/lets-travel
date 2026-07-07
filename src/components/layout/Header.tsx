import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_MENUS } from "@/graphql/cms/queries/menu";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { AuthButton } from "./AuthButton";
import { MobileMenu } from "./MobileMenu";
import { routing } from "@/i18n/routing";
import { Mountain } from "lucide-react";
import type { MenuItem } from "@/graphql/cms/queries/menu";

interface HeaderProps {
  locale: string;
}

export default async function Header({ locale }: HeaderProps) {
  const client = await getServerApolloClient(false);
  const { data } = await client.query({
    query: CP_MENUS,
    variables: { language: locale, kind: "header" },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const typedData = data as { cpMenus?: MenuItem[] } | undefined;
  const menuItems: MenuItem[] = (typedData?.cpMenus ?? [])
    .filter((item: MenuItem) => !item.parentId)
    .sort((a: MenuItem, b: MenuItem) => (a.order ?? 0) - (b.order ?? 0));

  const fallbackItems = [
    { label: "Home", url: "/" },
    { label: "Tours", url: "/tours" },
    { label: "About", url: "/about" },
    { label: "Blog", url: "/blog" },
    { label: "Contact", url: "/contact" },
  ];

  const items =
    menuItems.length > 0
      ? menuItems
      : fallbackItems.map((item, i) => ({
          ...item,
          order: i,
          _id: String(i),
          clientPortalId: "",
        }));

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-foreground"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
            <Mountain className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="hidden sm:inline">LET&apos;S TRAVEL</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <Link
              key={item._id}
              href={item.url || "/"}
              className="group relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-primary transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher locales={routing.locales} />
          <AuthButton />
          <Link
            href="/contact"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5"
          >
            Plan My Trip
          </Link>
        </div>

        <MobileMenu items={items} />
      </div>
    </header>
  );
}
