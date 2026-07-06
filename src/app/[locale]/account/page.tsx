"use client";

import { useAuth } from "@/lib/auth/AuthContext";
import RequireAuth from "@/lib/auth/RequireAuth";
import { useTranslations } from "next-intl";
import Image from "@/components/common/Image";

export default function AccountPage() {
  const { user } = useAuth();
  const t = useTranslations("auth");

  return (
    <RequireAuth>
      <div className="relative min-h-[calc(100vh-5rem)]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/account-landscape.jpg"
            alt="Mongolia landscape"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-4 py-20">
          <h1 className="text-3xl font-extrabold text-foreground">{t("account")}</h1>
          <div className="mt-8 rounded-2xl bg-card/80 p-8 shadow-sm backdrop-blur">
            <p className="text-foreground">
              <span className="font-semibold">Name:</span> {user?.firstName} {user?.lastName}
            </p>
            <p className="mt-2 text-foreground">
              <span className="font-semibold">Email:</span> {user?.email}
            </p>
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
