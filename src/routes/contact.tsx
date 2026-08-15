import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { business, mailHref, telHref, whatsappHref } from "@/data/business";

const TITLE = "צור קשר | יוסי מימוני — קבלן ושיפוצים";
const DESCRIPTION = "יצירת קשר עם יוסי מימוני לקבלת הצעת מחיר לפרויקט שיפוץ או בנייה.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`פנייה חדשה מהאתר — ${name}`);
    const body = encodeURIComponent(
      `שם: ${name}\nטלפון: ${phone}${email ? `\nדוא״ל: ${email}` : ""}\n\n${message}`,
    );
    window.location.href = `mailto:${business.email ?? ""}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-site section-y">
          <p className="eyebrow">צור קשר</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] md:text-5xl">
            יש לכם פרויקט בראש? בואו נדבר.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            השאירו פרטים או פנו אלינו ישירות — נחזור אליכם כדי להבין את הצרכים ולתכנן את הצעד הבא.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-border bg-card p-6 shadow-soft md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">שם מלא</Label>
                <Input id="name" name="name" required className="mt-2" placeholder="השם שלכם" />
              </div>
              <div>
                <Label htmlFor="phone">טלפון</Label>
                <Input id="phone" name="phone" type="tel" required className="mt-2" placeholder="050-0000000" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="email">דוא״ל (אופציונלי)</Label>
                <Input id="email" name="email" type="email" className="mt-2" placeholder="example@mail.com" />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">ספרו לנו על הפרויקט</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="mt-2 min-h-32"
                  placeholder="סוג העבודה, גודל החלל, לוח זמנים משוער..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-7 font-display font-semibold text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              שליחת הפנייה
            </button>

            {status === "sent" && (
              <p className="mt-4 text-sm text-muted-foreground">
                פתחנו עבורכם הודעת מייל עם הפרטים שמילאתם — פשוט לשלוח. אפשר גם לפנות ישירות בטלפון או
                בוואטסאפ.
              </p>
            )}
          </form>

          <aside className="space-y-4">
            <div className="rounded-lg border border-border bg-surface p-6">
              <h2 className="font-display text-lg font-bold">רוצים לדבר ישירות?</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone aria-hidden="true" className="size-4 shrink-0 text-accent" />
                  <a href={telHref} className="font-semibold hover:text-accent">
                    {business.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle aria-hidden="true" className="size-4 shrink-0 text-accent" />
                  {whatsappHref ? (
                    <a href={whatsappHref} className="font-semibold hover:text-accent">
                      {business.whatsappDisplay}
                    </a>
                  ) : (
                    <span className="font-semibold">{business.whatsappDisplay}</span>
                  )}
                </li>
                <li className="flex items-center gap-3">
                  <Mail aria-hidden="true" className="size-4 shrink-0 text-accent" />
                  {mailHref ? (
                    <a href={mailHref} className="font-semibold hover:text-accent">
                      {business.emailDisplay}
                    </a>
                  ) : (
                    <span className="font-semibold">{business.emailDisplay}</span>
                  )}
                </li>
                <li className="flex items-center gap-3">
                  <MapPin aria-hidden="true" className="size-4 shrink-0 text-accent" />
                  <span className="font-semibold">{business.serviceAreaDisplay}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-ink p-6 text-ink-foreground">
              <h2 className="font-display text-lg font-bold">זמני מענה</h2>
              <p className="mt-3 text-sm text-ink-muted">
                אנחנו משתדלים לחזור לכל פנייה תוך יום עסקים אחד. לעניינים דחופים, עדיף להתקשר ישירות.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
