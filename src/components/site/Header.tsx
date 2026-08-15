import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { business, telHref } from "@/data/business";
import { cn } from "@/lib/utils";

export const navLinks = [
  { to: "/", label: "בית" },
  { to: "/about", label: "אודות" },
  { to: "/services", label: "שירותים" },
  { to: "/projects", label: "פרויקטים" },
  { to: "/contact", label: "צור קשר" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-site flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="יוסי מימוני — לדף הבית">
          <span
            aria-hidden="true"
            className="grid size-10 shrink-0 place-items-center rounded-md bg-ink font-display text-lg font-bold text-ink-foreground"
          >
            ימ
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold text-foreground md:text-lg">
              {business.name}
            </span>
            <span className="block truncate text-xs text-muted-foreground md:text-sm">
              {business.tagline}
            </span>
          </span>
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-muted" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="hidden min-h-11 items-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-ink-foreground transition-colors hover:bg-primary sm:inline-flex"
          >
            <Phone aria-hidden="true" className="size-4" />
            <span>התקשרו אלינו</span>
            <span className="sr-only"> — {business.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "סגירת תפריט הניווט" : "פתיחת תפריט הניווט"}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        hidden={!open}
        className={cn(
          "border-t border-border bg-background lg:hidden",
          open && "animate-in fade-in slide-in-from-top-2",
        )}
      >
        <nav aria-label="ניווט נייד" className="container-site py-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-md px-2 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  activeProps={{ className: "bg-muted" }}
                  activeOptions={{ exact: link.to === "/" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={telHref}
            onClick={() => setOpen(false)}
            className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-4 font-semibold text-ink-foreground"
          >
            <Phone aria-hidden="true" className="size-4" />
            התקשרו אלינו — {business.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
