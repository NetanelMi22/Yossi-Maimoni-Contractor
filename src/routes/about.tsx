import { createFileRoute } from "@tanstack/react-router";
import { HardHat, MessageCircle, ShieldCheck } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import aboutImage from "@/assets/project-home.jpg";

const TITLE = "אודות יוסי מימוני | קבלן ושירותי שיפוצים";
const DESCRIPTION = "יוסי מימוני, קבלן ושירותי שיפוצים — גישה מקצועית, אמינות ותשומת לב לפרטים בכל פרויקט.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: ShieldCheck,
    title: "אמינות ושקיפות",
    description: "מחיר ברור מראש, בלי הפתעות באמצע הדרך. כל שינוי בתכנית עובר איתכם לפני שהוא קורה.",
  },
  {
    icon: HardHat,
    title: "עבודה מקצועית",
    description: "ביצוע קפדני עם דגש על גימור נקי ותשומת לב לפרטים הקטנים שעושים את ההבדל.",
  },
  {
    icon: MessageCircle,
    title: "ליווי אישי",
    description: "זמינים לשאלות ומעדכנים אתכם באופן שוטף — מהיום הראשון ועד המסירה.",
  },
];

const steps = [
  { title: "שיחת היכרות", description: "מספרים לנו על הפרויקט, הצרכים והחזון שלכם." },
  { title: "תכנון והצעת מחיר", description: "מגבשים תכנית עבודה מפורטת והצעת מחיר ברורה." },
  { title: "ביצוע", description: "עבודה מסודרת בשטח, עם עדכונים שוטפים לאורך הדרך." },
  { title: "מסירה וליווי", description: "בדיקה משותפת ומסירה מסודרת — וזמינים גם אחרי שמסיימים." },
];

function About() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-site section-y">
          <p className="eyebrow">מי אנחנו</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] md:text-5xl">
            קבלן שעובד כמו שהוא היה בונה לעצמו.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
            יוסי מימוני מלווה משפחות ובעלי עסקים בפרויקטי שיפוץ ובנייה — מהתכנון הראשוני ועד המסירה, עם דגש
            על עבודה נקייה ותקשורת ברורה.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">הגישה שלנו</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">כל פרויקט מתחיל בהקשבה.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              לפני שמתחילים לעבוד, אנחנו יושבים איתכם ומבינים מה חשוב לכם — התקציב, לוחות הזמנים והציפיות
              מהתוצאה הסופית. משם, אנחנו בונים תכנית עבודה ברורה שאתם שותפים לה מהיום הראשון.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              אנחנו מאמינים שהדרך הכי טובה לבנות אמון היא לעמוד במה שסיכמנו — בזמנים, באיכות ובתקציב.
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-lg lg:order-2">
            <img
              src={aboutImage}
              alt="עבודת בנייה ושיפוץ בביצוע — תמונת המחשה"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-site">
          <p className="eyebrow">למה לעבוד איתנו</p>
          <h2 className="mt-4 max-w-lg text-3xl font-bold md:text-4xl">מקצועיות בכל שלב בדרך.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-border bg-card p-6 shadow-soft">
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-muted text-accent">
                  <value.icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-site">
          <p className="eyebrow">איך אנחנו עובדים</p>
          <h2 className="mt-4 max-w-lg text-3xl font-bold md:text-4xl">מפגישת ההיכרות ועד למסירה.</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t-2 border-accent pt-5">
                <span className="font-display text-sm font-bold text-accent">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="מוכנים להתחיל לתכנן?"
        description="ספרו לנו על הפרויקט שלכם ונחזור אליכם לשיחת היכרות קצרה."
        ctaLabel="בואו נדבר"
      />
    </>
  );
}
