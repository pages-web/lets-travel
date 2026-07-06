import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | Let's Travel Mongolia",
  description: "The page you are looking for does not exist.",
};

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-32 text-center">
      <h1 className="text-6xl font-extrabold text-foreground">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">Page not found.</p>
    </div>
  );
}
