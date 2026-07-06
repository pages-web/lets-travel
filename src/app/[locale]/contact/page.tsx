import type { Metadata } from "next";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES } from "@/graphql/cms/queries/page";
import PageHeader from "@/components/sections/PageHeader";
import ContactForm from "@/components/sections/ContactForm";
import type { Page } from "@/graphql/cms/queries/page";

export const metadata: Metadata = {
  title: "Contact | Let's Travel Mongolia",
  description: "Send an inquiry or request a tailor-made itinerary. We reply within one business day.",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const client = await getServerApolloClient();
  const { data } = await client.query({
    query: CP_PAGES,
    variables: { language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });

  const typedData = data as { cpPages?: Page[] } | undefined;
  const pages: Page[] = typedData?.cpPages ?? [];
  const contactPage = pages.find((p) => p.slug === "contact");

  return (
    <>
      <PageHeader
        label="CONTACT"
        title={contactPage?.name || "Start the conversation"}
        subtitle={contactPage?.description || "Send an inquiry or request a tailor-made itinerary."}
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-foreground">Office</h3>
              <p className="mt-2 text-muted-foreground">
                Ulaanbaatar, Mongolia
                <br />
                Sukhbaatar district, Seoul Business Center
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Email</h3>
              <p className="mt-2 text-muted-foreground">hello@letstravel.mn</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Phone</h3>
              <p className="mt-2 text-muted-foreground">+976 11 123 456</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {contactPage?.content && (
        <section className="bg-card py-20">
          <div
            className="prose prose-lg mx-auto max-w-3xl px-4 text-foreground"
            dangerouslySetInnerHTML={{ __html: contactPage.content }}
          />
        </section>
      )}
    </>
  );
}
