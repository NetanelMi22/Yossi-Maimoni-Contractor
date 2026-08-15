import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { navLinks } from "@/components/site/Header";
import { business, mailHref, telHref, whatsappHref } from "@/data/business";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">{business.name}</p>
          <p className="mt-1 text-sm text-ink-muted">{business.tagline}</p>
        </div>

        <nav aria-label="ניווט בתחתית האתר">
          <h2 className="font-display text-sm font-semibold">ניווט</h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="inline-flex min-h-9 items-center text-sm text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold">פרטי התקשרות</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            <li className="flex items-center gap-2">
              <Phone aria-hidden="true" className="size-4 shrink-0" />
              <a href={telHref} className="hover:text-ink-foreground">
                <span className="sr-only">טלפון: </span>
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail aria-hidden="true" className="size-4 shrink-0" />
              {mailHref ? (
                <a href={mailHref} className="hover:text-ink-foreground">
                  {business.emailDisplay}
                </a>
              ) : (
                <span>
                  <span className="sr-only">דוא״ל: </span>
                  {business.emailDisplay}
                </span>
              )}
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle aria-hidden="true" className="size-4 shrink-0" />
              {whatsappHref ? (
                <a href={whatsappHref} className="hover:text-ink-foreground">
                  {business.whatsappDisplay}
                </a>
              ) : (
                <span>
                  <span className="sr-only">וואטסאפ: </span>
                  {business.whatsappDisplay}
                </span>
              )}
            </li>
            <li className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="size-4 shrink-0" />
              <span>
                <span className="sr-only">אזור שירות: </span>
                {business.serviceAreaDisplay}
              </span>
            </li>
          </ul>

          {business.social.length > 0 && (
            <ul className="mt-4 flex gap-4 text-sm">
              {business.social.map((s) => (
                <li key={s.url}>
                  <a href={s.url} className="text-ink-muted hover:text-ink-foreground">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 יוסי מימוני. כל הזכויות שמורות.</p>
          <Link to="/privacy" className="hover:text-ink-foreground">
            מדיניות פרטיות
          </Link>
        </div>
      </div>
    </footer>
  );
}
