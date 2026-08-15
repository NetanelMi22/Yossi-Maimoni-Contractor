import { Link } from "@tanstack/react-router";
import {
  Bath,
  Building2,
  HardHat,
  Hammer,
  PaintRoller,
  Ruler,
  type LucideIcon,
} from "lucide-react";

import type { Service, ServiceIcon } from "@/data/services";

export const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  hammer: Hammer,
  ruler: Ruler,
  building: Building2,
  paintRoller: PaintRoller,
  bath: Bath,
  hardHat: HardHat,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];

  return (
    <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift">
      <span className="grid size-11 shrink-0 place-items-center rounded-md bg-muted text-foreground">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
      <p className="mt-2 grow text-sm leading-relaxed text-muted-foreground">
        {service.shortDescription}
      </p>
      <Link
        to="/services"
        hash={service.slug}
        className="mt-5 inline-flex min-h-9 items-center gap-1 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
      >
        קראו עוד
        <span className="sr-only"> על {service.title}</span>
        <span aria-hidden="true">←</span>
      </Link>
    </article>
  );
}
