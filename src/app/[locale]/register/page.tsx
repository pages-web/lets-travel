"use client";

import { useMutation } from "@apollo/client/react";
import { CLIENT_PORTAL_USER_REGISTER } from "@/graphql/auth/mutations/register";
import { useAuth } from "@/lib/auth/AuthContext";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MotionButton } from "@/components/motion/MotionButton";

export default function RegisterPage() {
  const router = useRouter();
  const { refetch } = useAuth();
  const t = useTranslations("auth");
  const [register, { loading, error }] = useMutation(CLIENT_PORTAL_USER_REGISTER);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const firstName = form.get("firstName") as string;
    const lastName = form.get("lastName") as string;

    try {
      await register({
        variables: {
          email,
          password,
          firstName,
          lastName,
        },
      });
      await refetch();
      router.push("/account");
    } catch {
      // error handled by Apollo error state
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <h1 className="text-3xl font-extrabold text-foreground">{t("register")}</h1>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-semibold text-foreground">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-semibold text-foreground">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-foreground">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-semibold text-foreground">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        {error && <p className="text-sm text-destructive">{error.message}</p>}
        <MotionButton
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {loading ? "..." : t("register")}
        </MotionButton>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline">
          {t("login")}
        </Link>
      </p>
    </div>
  );
}
