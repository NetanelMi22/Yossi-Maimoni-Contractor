import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { CTASection } from "@/components/site/CTASection";
import { ProjectCard } from "@/components/site/ProjectCard";
import { categoryLabels, projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

const TITLE = "פרויקטים | יוסי מימוני — קבלן ושיפוצים";
const DESCRIPTION = "גלריית פרויקטים של יוסי מימוני. התוכן יעודכן בפרויקטים אמיתיים לאחר קבלת החומרים.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const categories = useMemo(() => {
    const present = new Set(projects.map((p) => p.category));
    return (["all", ...Array.from(present)] as const).filter(
      (c): c is ProjectCategory | "all" => c === "all" || present.has(c),
    );
  }, []);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-site section-y">
          <p className="eyebrow">פרויקטים נבחרים</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] md:text-5xl">
            עבודה שמדברת בעד עצמה.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            כמה מהעבודות שלנו — ותוכן לדוגמה שממחיש איך תיראה גלריית הפרויקטים המלאה.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site">
          <div className="flex flex-wrap gap-2" role="group" aria-label="סינון פרויקטים לפי קטגוריה">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={cn(
                  "min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors",
                  active === category
                    ? "border-ink bg-ink text-ink-foreground"
                    : "border-border text-muted-foreground hover:border-ink hover:text-foreground",
                )}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-muted-foreground">אין כרגע פרויקטים בקטגוריה זו.</p>
          )}
        </div>
      </section>

      <CTASection
        title="יש לכם פרויקט בראש?"
        description="ספרו לנו מה אתם מתכננים ונחזור אליכם עם הצעת מחיר."
        ctaLabel="בקשת הצעת מחיר"
      />
    </>
  );
}
