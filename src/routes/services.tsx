import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { serviceIcons } from "@/components/site/ServiceCard";
import { enabledServices } from "@/data/services";

const TITLE = "שירותים | יוסי מימוני — קבלן ושיפוצים";
const DESCRIPTION = "שירותי שיפוצים, בנייה, מטבחים וחדרי רחצה, צבע ועבודות גמר וקבלנות כללית.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-site section-y">
          <p className="eyebrow">השירותים שלנו</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] md:text-5xl">
            כל מה שהפרויקט שלכם צריך, תחת קורת גג אחת.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            משיפוץ ממוקד ועד פרויקט בנייה שלם — עם תכנון מדויק, ביצוע מקצועי וליווי אישי בכל שלב.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site space-y-5">
          {enabledServices.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <article
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-24 gap-6 rounded-lg border border-border bg-card p-6 shadow-soft md:grid-cols-[auto_1fr] md:items-start md:p-8"
              >
                <span className="grid size-14 shrink-0 place-items-center rounded-md bg-surface text-accent">
                  <Icon aria-hidden="true" className="size-6" />
                </span>
                <div>
                  <h2 className="text-xl font-bold md:text-2xl">{service.title}</h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
                  {service.includes.length > 0 && (
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                          <Check aria-hidden="true" className="size-4 shrink-0 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection
        title="לא בטוחים אילו שירותים אתם צריכים?"
        description="ספרו לנו על הפרויקט ונעזור לכם למפות מה נדרש ולתכנן את הצעדים הבאים."
        ctaLabel="בואו נדבר"
      />
    </>
  );
}
