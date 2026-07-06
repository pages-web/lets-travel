import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_ERXES_ENDPOINT: "https://letstravel.next.erxes.io/gateway/graphql",
    NEXT_PUBLIC_ERXES_CMS_ID: "6a4b2392d4a990261f49300d",
  },
};

export default withNextIntl(nextConfig);
