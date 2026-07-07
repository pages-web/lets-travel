"use client";

import { useState } from "react";
import { MotionButton } from "@/components/motion/MotionButton";

interface TourBookingFormProps {
  slug: string;
  title: string;
  basePrice: number;
}

export default function TourBookingForm({ slug, title, basePrice }: TourBookingFormProps) {
  const [form, setForm] = useState({
    startDate: "",
    adults: 2,
    children: 0,
    infants: 0,
    name: "",
    email: "",
    phone: "",
    requests: "",
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
        <h3 className="text-xl font-bold text-foreground">Request received</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for your interest in {title}. We will contact you within 24 hours to confirm availability and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-card p-6 shadow-sm lg:p-8">
      <h3 className="text-xl font-bold text-foreground">Book this tour</h3>
      <p className="mt-1 text-sm text-muted-foreground">{title}</p>

      <div className="mt-6 space-y-5">
        <div className="space-y-2">
          <label htmlFor="startDate" className="text-sm font-semibold text-foreground">Preferred start date</label>
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
            { label: "Adults", field: "adults" as const, min: 1 },
            { label: "Children", field: "children" as const, min: 0 },
            { label: "Infants", field: "infants" as const, min: 0 },
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

        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-foreground">Full name</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-foreground">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone</label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="requests" className="text-sm font-semibold text-foreground">Special requests</label>
          <textarea
            id="requests"
            rows={3}
            value={form.requests}
            onChange={(e) => update("requests", e.target.value)}
            className="w-full rounded-lg border border-input bg-secondary px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-muted p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Travelers</span>
          <span className="font-medium text-foreground">{totalTravelers}</span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-muted-foreground">Estimated total</span>
          <span className="text-lg font-bold text-foreground">${Math.round(estimatedPrice).toLocaleString()}</span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">Infants travel free. Children 30% off. Final price confirmed by our team.</p>
      </div>

      <MotionButton
        type="submit"
        className="mt-6 w-full rounded-md bg-primary py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90"
      >
        Send booking request
      </MotionButton>
    </form>
  );
}
