import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Phone } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { ProjectCard } from "@/components/site/ProjectCard";
import { ServiceCard } from "@/components/site/ServiceCard";
import heroImage from "@/assets/hero-renovation.jpg";
import { featuredProjects } from "@/data/projects";
import { enabledServices } from "@/data/services";
import { business, telHref } from "@/data/business";

const TITLE = "יוסי מימוני | קבלן ושירותי שיפוצים";
const DESCRIPTION = "בנייה ושיפוצים ברמה גבוהה, עם תכנון מדויק, ביצוע מקצועי ויחס אישי.";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: TITLE }, { name: "description", content: DESCRIPTION }] }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-ink text-white">
        <img src={heroImage} alt="שיפוץ ועיצוב חלל מגורים" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/55 to-black/20" />
        <div className="container-site relative flex min-h-[78vh] items-end pb-16 pt-28 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold tracking-[0.18em] text-white/70">יוסי מימוני · קבלן ושיפוצים</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">בונים נכון.<br />משפצים בדיוק.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80 md:text-xl">ביצוע מקצועי, גימור מוקפד ויחס אישי — מהרעיון הראשון ועד הפרט האחרון.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-13 items-center justify-center gap-2 bg-accent px-7 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">בואו נדבר על הפרויקט <ArrowLeft className="size-4" /></Link>
              <Link to="/projects" className="inline-flex min-h-13 items-center justify-center border border-white/35 px-7 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10">לפרויקטים שלנו</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white">
        <div className="container-site grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {["תכנון וביצוע מדויק", "חומרים וגימור איכותיים", "ליווי אישי לאורך הדרך"].map((item, index) => <div key={item} className="flex items-center gap-4 px-0 py-6 md:px-8 md:py-8"><span className="text-sm font-bold text-accent">0{index + 1}</span><span className="font-semibold">{item}</span></div>)}
        </div>
      </section>

      <section className="section-y"><div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start"><div><p className="eyebrow">קצת עלינו</p><h2 className="mt-4 max-w-md text-3xl font-bold md:text-4xl">בית טוב מתחיל בעבודה טובה.</h2></div><div className="max-w-2xl"><p className="text-lg leading-8 text-muted-foreground">אצלנו כל פרויקט מקבל את אותה רמת תשומת לב — משיפוץ ממוקד ועד פרויקט בנייה שלם. אנחנו מאמינים בעבודה נקייה, תקשורת ברורה ותוצאה שנשארת יפה גם שנים אחרי שמסיימים.</p><Link to="/about" className="mt-7 inline-flex items-center gap-2 font-semibold underline decoration-accent decoration-2 underline-offset-8 hover:text-accent">להכיר את יוסי <ArrowLeft className="size-4" /></Link></div></div></section>

      <section className="section-y bg-surface"><div className="container-site"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">השירותים שלנו</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">כל מה שהפרויקט שלכם צריך.</h2></div><Link to="/services" className="inline-flex items-center gap-2 font-semibold">לכל השירותים <ArrowLeft className="size-4" /></Link></div><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{enabledServices.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div></section>

      <section className="section-y"><div className="container-site"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">פרויקטים נבחרים</p><h2 className="mt-3 text-3xl font-bold md:text-4xl">עבודה שמדברת בעד עצמה.</h2></div><Link to="/projects" className="inline-flex items-center gap-2 font-semibold">לכל הפרויקטים <ArrowLeft className="size-4" /></Link></div><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></section>

      <section className="bg-ink py-16 text-white md:py-20"><div className="container-site grid gap-8 md:grid-cols-[1fr_auto] md:items-center"><div><p className="text-sm font-semibold tracking-widest text-accent">למה יוסי מימוני?</p><h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">מקצועיות, שקיפות ויחס אישי — בלי קיצורי דרך.</h2></div><div className="grid gap-3 text-sm text-white/80">{["עבודה מקצועית ומוקפדת", "תקשורת ברורה לאורך הפרויקט", "עמידה בזמנים ככל שניתן", "ליווי אישי מתחילה ועד הסוף"].map((item) => <div key={item} className="flex items-center gap-3"><Check className="size-4 text-accent" />{item}</div>)}</div></div></section>

      <CTASection title="יש לכם פרויקט בראש? בואו נדבר." description="ספרו לנו מה אתם מתכננים ונחזור אליכם כדי להבין את הצרכים ולתכנן את הצעד הבא." ctaLabel="לקבלת הצעת מחיר" />
      <div className="fixed bottom-4 left-4 z-40 sm:hidden"><a href={telHref} className="flex size-14 items-center justify-center rounded-full bg-ink text-white shadow-lift" aria-label={`התקשרו ל${business.name}`}><Phone className="size-5" /></a></div>
    </>
  );
}
