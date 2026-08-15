import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MapPin } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";
import { categoryLabels, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: "פרויקט | יוסי מימוני — קבלן ושיפוצים" },
      { name: "description", content: "פרטי פרויקט של יוסי מימוני." },
      { property: "og:title", content: "פרויקט | יוסי מימוני" },
      { property: "og:description", content: "פרטי פרויקט של יוסי מימוני." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/projects/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PagePlaceholder
        title="הפרויקט לא נמצא"
        description="ייתכן שהקישור שגוי או שהפרויקט הוסר. אפשר לחזור לגלריית הפרויקטים ולנסות שוב."
      />
    );
  }

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-site section-y">
          <nav aria-label="פירורי לחם" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/projects" className="hover:text-foreground">
              פרויקטים
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{project.title}</span>
          </nav>
          <p className="eyebrow mt-6">{project.type}</p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">{project.title}</h1>
          {project.location && (
            <p className="mt-3 flex items-center gap-2 text-muted-foreground">
              <MapPin aria-hidden="true" className="size-4" />
              {project.location}
            </p>
          )}
          {project.isPlaceholder && <p className="placeholder-chip">תוכן לדוגמה — אינו פרויקט שבוצע</p>}
        </div>
      </section>

      <section className="section-y">
        <div className="container-site grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div>
            <div className="overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{project.description}</p>
          </div>

          <aside className="rounded-lg border border-border bg-card p-6 shadow-soft">
            <h2 className="font-display text-lg font-bold">פרטי הפרויקט</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
                <dt className="text-muted-foreground">קטגוריה</dt>
                <dd className="font-semibold">{categoryLabels[project.category]}</dd>
              </div>
              {project.location && (
                <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">מיקום</dt>
                  <dd className="font-semibold">{project.location}</dd>
                </div>
              )}
            </dl>

            {project.servicesPerformed.length > 0 && (
              <>
                <h3 className="mt-6 text-sm font-semibold">שירותים שבוצעו</h3>
                <ul className="mt-3 space-y-2">
                  {project.servicesPerformed.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Check aria-hidden="true" className="size-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <Link
              to="/contact"
              className="mt-6 flex min-h-11 items-center justify-center rounded-md bg-ink px-5 font-semibold text-ink-foreground transition-colors hover:bg-primary"
            >
              רוצים תוצאה דומה? דברו איתנו
            </Link>
          </aside>
        </div>

        <div className="container-site mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-semibold underline decoration-accent decoration-2 underline-offset-8 hover:text-accent"
          >
            לכל הפרויקטים
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
