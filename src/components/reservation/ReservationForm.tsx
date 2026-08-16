"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, MessageCircle, Info } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";
import {
  emptyBookingForm,
  isBookingFormValid,
  buildSummaryLines,
  buildMailtoHref,
  buildWhatsappHref,
  type BookingFormData,
} from "@/lib/booking";

const adultsRange = [1, 2, 3, 4, 5, 6];
const childrenRange = [0, 1, 2, 3, 4];

export function ReservationForm({ dict }: { dict: Dictionary }) {
  const [data, setData] = useState<BookingFormData>(emptyBookingForm);
  const [submitted, setSubmitted] = useState(false);

  const b = dict.booking;
  const f = b.fields;
  const valid = isBookingFormValid(data);

  function update<K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    update(e.target.name as keyof BookingFormData, e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    document.getElementById("reservation-summary")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const showSummary = submitted && valid;
  const summaryLines = buildSummaryLines(data, dict);

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label={f.checkin}>
            <input
              type="date"
              name="checkin"
              required
              value={data.checkin}
              onChange={handleChange}
              className="input"
            />
          </Field>
          <Field label={f.checkout}>
            <input
              type="date"
              name="checkout"
              required
              value={data.checkout}
              onChange={handleChange}
              className="input"
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label={f.adults}>
            <select name="adults" value={data.adults} onChange={handleChange} className="input">
              {adultsRange.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </Field>
          <Field label={f.children}>
            <select name="children" value={data.children} onChange={handleChange} className="input">
              {childrenRange.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label={f.roomType}>
            <select name="roomType" value={data.roomType} onChange={handleChange} className="input">
              <option value="">—</option>
              {b.roomTypeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label={f.plan}>
            <select name="plan" value={data.plan} onChange={handleChange} className="input">
              <option value="">—</option>
              {b.planOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label={f.name}>
          <input
            type="text"
            name="name"
            required
            value={data.name}
            onChange={handleChange}
            className="input"
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label={f.email}>
            <input type="email" name="email" value={data.email} onChange={handleChange} className="input" />
          </Field>
          <Field label={f.phone}>
            <input type="tel" name="phone" value={data.phone} onChange={handleChange} className="input" />
          </Field>
        </div>

        <Field label={f.message}>
          <textarea
            name="message"
            rows={3}
            placeholder={f.messagePlaceholder}
            value={data.message}
            onChange={handleChange}
            className="input resize-none"
          />
        </Field>

        <p className="flex items-start gap-2 text-xs text-navy-900/55">
          <Info className="h-4 w-4 shrink-0 mt-0.5" aria-hidden />
          {b.requiredNote}
        </p>

        <button
          type="submit"
          className="w-full sm:w-auto rounded-full bg-navy-950 text-offwhite font-semibold px-7 py-3.5 hover:bg-navy-900 transition-colors"
        >
          {b.submit}
        </button>
      </form>

      <div id="reservation-summary" className="lg:col-span-2 scroll-mt-28">
        <div className="rounded-3xl border border-navy-900/10 bg-sand-50 p-6 sm:p-7 sticky top-28">
          <h3 className="font-serif-display text-xl text-navy-950">{b.summaryTitle}</h3>

          {!showSummary && <p className="mt-3 text-sm text-navy-900/60">{b.summaryEmpty}</p>}

          {showSummary && (
            <>
              <ul className="mt-4 space-y-1.5 text-sm text-navy-900/80">
                {summaryLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={buildMailtoHref(data, dict)}
                  className="flex items-center justify-center gap-2 rounded-full bg-navy-950 text-offwhite font-medium px-5 py-3 hover:bg-navy-900 transition-colors"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  {b.sendEmail}
                </a>
                <a
                  href={buildWhatsappHref(data, dict)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-navy-950 font-medium px-5 py-3 hover:brightness-95 transition-[filter]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  {b.sendWhatsapp}
                </a>
              </div>

              <p className="mt-4 text-xs text-navy-900/55">{b.successNote}</p>
            </>
          )}

          <p className="mt-6 text-xs text-navy-900/45 border-t border-navy-900/10 pt-4">{b.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium tracking-wide uppercase text-navy-900/60 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}
