import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_MENUS } from "@/graphql/cms/queries/menu";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { AuthButton } from "./AuthButton";
import { MobileMenu } from "./MobileMenu";
import { routing } from "@/i18n/routing";
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-foreground"
        >
          LET&apos;S TRAVEL
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <Link
              key={item._id}
              href={item.url || "/"}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher locales={routing.locales} />
          <AuthButton />
          <Link
            href="/contact"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Plan My Trip
          </Link>
        </div>

        <MobileMenu items={items} />
      </div>
    </header>
  );
}
