import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";

import { business, telHref, whatsappHref } from "@/data/business";

/** Persistent mobile contact bar: call, WhatsApp (only when configured), quote. */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] data-[cols=3]:grid-cols-3" data-cols={whatsappHref ? 3 : 2}>
        <a
          href={telHref}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border text-sm font-semibold text-foreground"
        >
          <Phone aria-hidden="true" className="size-4" />
          חיוג
          <span className="sr-only"> — {business.phoneDisplay}</span>
        </a>
        {whatsappHref && (
          <a
            href={whatsappHref}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border text-sm font-semibold text-foreground"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            וואטסאפ
          </a>
        )}
        <Link
          to="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent text-sm font-semibold text-accent-foreground"
        >
          הצעת מחיר
        </Link>
      </div>
    </div>
  );
}
