import type { Dictionary } from "@/i18n/dictionaries";
import { hotel } from "@/lib/hotel";

export interface BookingFormData {
  checkin: string;
  checkout: string;
  adults: string;
  children: string;
  roomType: string;
  plan: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const emptyBookingForm: BookingFormData = {
  checkin: "",
  checkout: "",
  adults: "2",
  children: "0",
  roomType: "",
  plan: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function isBookingFormValid(data: BookingFormData): boolean {
  return Boolean(
    data.checkin && data.checkout && data.adults && data.name && (data.email || data.phone)
  );
}

function optionLabel(options: { value: string; label: string }[], value: string): string {
  return options.find((o) => o.value === value)?.label ?? value;
}

export function buildSummaryLines(data: BookingFormData, dict: Dictionary): string[] {
  const f = dict.booking.fields;
  const lines: string[] = [];

  if (data.checkin) lines.push(`${f.checkin} : ${data.checkin}`);
  if (data.checkout) lines.push(`${f.checkout} : ${data.checkout}`);
  lines.push(`${f.adults} : ${data.adults || "0"}`);
  lines.push(`${f.children} : ${data.children || "0"}`);
  if (data.roomType) lines.push(`${f.roomType} : ${optionLabel(dict.booking.roomTypeOptions, data.roomType)}`);
  if (data.plan) lines.push(`${f.plan} : ${optionLabel(dict.booking.planOptions, data.plan)}`);
  if (data.name) lines.push(`${f.name} : ${data.name}`);
  if (data.email) lines.push(`${f.email} : ${data.email}`);
  if (data.phone) lines.push(`${f.phone} : ${data.phone}`);
  if (data.message) lines.push(`${f.message} : ${data.message}`);

  return lines;
}

export function buildMailtoHref(data: BookingFormData, dict: Dictionary): string {
  const subject = encodeURIComponent(`${dict.booking.title} – ${hotel.name}`);
  const body = encodeURIComponent(buildSummaryLines(data, dict).join("\n"));
  return `mailto:${hotel.email}?subject=${subject}&body=${body}`;
}

export function buildWhatsappHref(data: BookingFormData, dict: Dictionary): string {
  const text = encodeURIComponent(
    `${dict.booking.title} – ${hotel.name}\n${buildSummaryLines(data, dict).join("\n")}`
  );
  return `https://wa.me/${hotel.whatsapp}?text=${text}`;
}
