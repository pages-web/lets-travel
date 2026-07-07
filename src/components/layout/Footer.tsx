import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_MENUS } from "@/graphql/cms/queries/menu";
import { Link } from "@/i18n/routing";
import { Mountain, Mail, Phone } from "lucide-react";
import type { MenuItem } from "@/graphql/cms/queries/menu";

interface FooterProps {
  locale: string;
}

export default async function Footer({ locale }: FooterProps) {
  const client = await getServerApolloClient(false);
  const { data } = await client.query({
    query: CP_MENUS,
    variables: { language: locale, kind: "footer" },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const typedData = data as { cpMenus?: MenuItem[] } | undefined;
  const menuItems: MenuItem[] = (typedData?.cpMenus ?? [])
    .filter((item: MenuItem) => !item.parentId)
    .sort((a: MenuItem, b: MenuItem) => (a.order ?? 0) - (b.order ?? 0));

  const exploreItems = [
    { label: "Tours", url: "/tours" },
    { label: "About", url: "/about" },
    { label: "Blog", url: "/blog" },
  ];

  const supportItems = [
    { label: "Contact", url: "/contact" },
    { label: "FAQ", url: "/faq" },
    { label: "Privacy", url: "/privacy" },
  ];

  return (
    <footer className="bg-[#1C1917] text-[#D6D3D1]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5 lg:col-span-1">
            <Link href="/" className="group flex items-center gap-2.5 text-xl font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Mountain className="h-5 w-5" strokeWidth={2.5} />
              </span>
              LET&apos;S TRAVEL
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-[#A8A29E]">
              Handcrafted Mongolia journeys for curious travelers.
            </p>
            <div className="space-y-2 text-sm text-[#A8A29E]">
              <a href="mailto:hello@letstravel.mn" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-primary" />
                hello@letstravel.mn
              </a>
              <a href="tel:+97699999999" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                +976 9999 9999
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">Explore</h4>
            <ul className="space-y-2.5">
              {exploreItems.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className="text-sm text-[#D6D3D1] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white">Support</h4>
            <ul className="space-y-2.5">
              {supportItems.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className="text-sm text-[#D6D3D1] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {menuItems.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white">Quick Links</h4>
              <ul className="space-y-2.5">
                {menuItems.map((item) => (
                  <li key={item._id}>
                    <Link
                      href={item.url || "/"}
                      className="text-sm text-[#D6D3D1] hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-[#78716C]">
            © {new Date().getFullYear()} Let&apos;s Travel Mongolia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

