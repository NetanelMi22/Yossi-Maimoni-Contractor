import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-shadow hover:shadow-lift">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
        />
      </div>
      <div className="flex grow flex-col p-6">
        <p className="text-xs font-semibold tracking-wide text-accent">{project.type}</p>
        <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
        {project.location && (
          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin aria-hidden="true" className="size-4" />
            {project.location}
          </p>
        )}
        <p className="mt-2 grow text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        {project.isPlaceholder && (
          <p className="mt-3 placeholder-chip">תוכן לדוגמה — אינו פרויקט שבוצע</p>
        )}
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="mt-5 inline-flex min-h-9 items-center gap-1 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
        >
          צפייה בפרויקט
          <span aria-hidden="true">←</span>
        </Link>
      </div>
    </article>
  );
}
