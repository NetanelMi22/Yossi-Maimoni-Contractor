import { Link } from "@tanstack/react-router";

export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="container-site section-y">
      <span className="eyebrow">בבנייה</span>
      <h1 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-md bg-ink px-5 font-semibold text-ink-foreground transition-colors hover:bg-primary"
      >
        חזרה לדף הבית
      </Link>
    </div>
  );
}
