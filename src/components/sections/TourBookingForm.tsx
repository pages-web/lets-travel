"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { CalendarDays } from "lucide-react";
import { BookingSubmitArea } from "./BookingSubmitArea";

interface TourBookingFormProps {
  slug: string;
  title: string;
  basePrice: number;
}

export default function TourBookingForm({ title, basePrice }: TourBookingFormProps) {
  const t = useTranslations("booking");
  const [form, setForm] = useState({
    startDate: "",
    adults: 2,
    children: 0,
    infants: 0,
  });
  const [submitted, setSubmitted] = useState(false);

  const totalTravelers = form.adults + form.children + form.infants;
  const estimatedPrice = basePrice * form.adults + basePrice * 0.7 * form.children;

  function update(field: keyof typeof form, value: string | number) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-card p-8 text-center shadow-sm">
        <h3 className="text-xl font-bold text-foreground">{t("requestReceived")}</h3>
        <p className="mt-2 text-muted-foreground">
          {t("requestReceivedDesc", { title })}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm lg:p-8">
      <h3 className="text-xl font-bold text-foreground">{t("bookThisTour")}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{title}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="space-y-2">
          <label htmlFor="startDate" className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <CalendarDays className="h-4 w-4 text-primary" />
            {t("preferredStartDate")}
          </label>
          <input
            id="startDate"
            type="date"
            required
            value={form.startDate}
            onChange={(e) => update("startDate", e.target.value)}
            className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: t("adults"), field: "adults" as const, min: 1 },
            { label: t("children"), field: "children" as const, min: 0 },
            { label: t("infants"), field: "infants" as const, min: 0 },
          ].map(({ label, field, min }) => (
            <div key={field} className="space-y-2">
              <label htmlFor={field} className="text-sm font-semibold text-foreground">{label}</label>
              <input
                id={field}
                type="number"
                min={min}
                required={field === "adults"}
                value={form[field]}
                onChange={(e) => update(field, Math.max(min, parseInt(e.target.value, 10) || 0))}
                className="w-full rounded-lg border border-input bg-secondary px-3 py-2.5 text-center text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-muted p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{t("travelers")}</span>
            <span className="font-medium text-foreground">{totalTravelers}</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-muted-foreground">{t("estimatedTotal")}</span>
            <span className="text-lg font-bold text-foreground">${Math.round(estimatedPrice).toLocaleString()}</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">{t("priceNote")}</p>
        </div>

        <BookingSubmitArea title={title} />
      </form>
    </div>
  );
}
