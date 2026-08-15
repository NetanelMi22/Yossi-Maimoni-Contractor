import { Link } from "@tanstack/react-router";

export function CTASection({
  title = "מתכננים שיפוץ או פרויקט בנייה?",
  description = "נשמח לשמוע על הפרויקט שלכם ולחזור אליכם עם הצעת מחיר.",
  ctaLabel = "בקשת הצעת מחיר",
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="container-site section-y text-center">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold text-balance md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-muted">{description}</p>
        <Link
          to="/contact"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-7 font-display font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
