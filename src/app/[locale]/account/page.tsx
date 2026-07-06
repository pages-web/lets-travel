"use client";

import { useAuth } from "@/lib/auth/AuthContext";
import RequireAuth from "@/lib/auth/RequireAuth";
import { useTranslations } from "next-intl";

export default function AccountPage() {
  const { user } = useAuth();
  const t = useTranslations("auth");

  return (
    <RequireAuth>
      <div className="mx-auto max-w-2xl px-4 py-20">
        <h1 className="text-3xl font-extrabold text-foreground">{t("account")}</h1>
        <div className="mt-8 rounded-2xl bg-card p-8 shadow-sm">
          <p className="text-foreground">
            <span className="font-semibold">Name:</span> {user?.firstName} {user?.lastName}
          </p>
          <p className="mt-2 text-foreground">
            <span className="font-semibold">Email:</span> {user?.email}
          </p>
        </div>
      </div>
    </RequireAuth>
  );
}
