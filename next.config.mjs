import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_ERXES_ENDPOINT: "https://letstravel.next.erxes.io/gateway/graphql",
    NEXT_PUBLIC_ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6Im1DSjRsQzhRaUdxUDhVN3FsbmhrWCIsImlhdCI6MTc4Mjc4OTYyMX0.2Rq7zGp9oOgHD0cBeFHP47hsqBXSuNpRzl7fQnf1HJc",
    NEXT_PUBLIC_ERXES_CMS_ID: "6a4b2392d4a990261f49300d",
    ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6Im1DSjRsQzhRaUdxUDhVN3FsbmhrWCIsImlhdCI6MTc4Mjc4OTYyMX0.2Rq7zGp9oOgHD0cBeFHP47hsqBXSuNpRzl7fQnf1HJc",
  },
};

export default withNextIntl(nextConfig);
