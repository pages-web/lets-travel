"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MotionButton } from "@/components/motion/MotionButton";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-card p-8 text-center shadow-sm">
        <h3 className="text-xl font-bold text-foreground">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">We have received your inquiry and will reply within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-card p-8 shadow-sm">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-foreground">
            {t("name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-foreground">
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <label htmlFor="interest" className="text-sm font-semibold text-foreground">
          {t("interest")}
        </label>
        <input
          id="interest"
          name="interest"
          type="text"
          className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="mt-6 space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-foreground">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="mt-8">
        <MotionButton
          type="submit"
          className="rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          {t("send")}
        </MotionButton>
      </div>
    </form>
  );
}
