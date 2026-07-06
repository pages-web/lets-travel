"use client";

import { useMutation } from "@apollo/client/react";
import { CLIENT_PORTAL_USER_LOGIN_WITH_CREDENTIALS } from "@/graphql/auth/mutations/loginWithCredentials";
import { useAuth } from "@/lib/auth/AuthContext";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MotionButton } from "@/components/motion/MotionButton";
import Image from "@/components/common/Image";

export default function LoginPage() {
  const router = useRouter();
  const { refetch } = useAuth();
  const t = useTranslations("auth");
  const [login, { loading, error }] = useMutation(CLIENT_PORTAL_USER_LOGIN_WITH_CREDENTIALS);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    try {
      await login({ variables: { email, password } });
      await refetch();
      router.push("/account");
    } catch {
      // error handled by Apollo error state
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-5rem)]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/login-landscape.jpg"
          alt="Mongolia landscape"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-md px-4 py-20">
        <h1 className="text-3xl font-extrabold text-foreground">{t("login")}</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-foreground">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-input bg-secondary/80 px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-semibold text-foreground">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-input bg-secondary/80 px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          {error && <p className="text-sm text-destructive">{error.message}</p>}
          <MotionButton
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "..." : t("login")}
          </MotionButton>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary hover:underline">
            {t("register")}
          </Link>
        </p>
      </div>
    </div>
  );
}
