/**
 * Central business information.
 *
 * IMPORTANT: All values wrapped in square brackets are PLACEHOLDERS.
 * Replace them with the real, verified business details.
 * Set `isConfigured` to true on a channel only once its real value is supplied.
 */

export const PLACEHOLDER = {
  phone: "[PHONE NUMBER]",
  email: "[EMAIL ADDRESS]",
  whatsapp: "[WHATSAPP NUMBER]",
  serviceArea: "[SERVICE AREA]",
} as const;

export const business = {
  name: "יוסי מימוני",
  tagline: "קבלן ושירותי שיפוצים",
  /** Raw phone number in international format, e.g. "+972500000000". null = not supplied yet. */
  phone: null as string | null,
  phoneDisplay: PLACEHOLDER.phone,
  email: null as string | null,
  emailDisplay: PLACEHOLDER.email,
  /** Digits only, international format without "+", e.g. "972500000000". null = not supplied yet. */
  whatsapp: null as string | null,
  whatsappDisplay: PLACEHOLDER.whatsapp,
  serviceArea: null as string | null,
  serviceAreaDisplay: PLACEHOLDER.serviceArea,
  whatsappMessage:
    "שלום יוסי, אני מעוניין לקבל הצעת מחיר עבור פרויקט שיפוץ/בנייה.",
  /** Only real, verified profile URLs. Leave empty until supplied. */
  social: [] as { label: string; url: string }[],
} as const;

export const telHref = business.phone ? `tel:${business.phone}` : "tel:";
export const mailHref = business.email ? `mailto:${business.email}` : undefined;
export const whatsappHref = business.whatsapp
  ? `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(business.whatsappMessage)}`
  : undefined;
