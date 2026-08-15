import { createFileRoute } from "@tanstack/react-router";

import { business } from "@/data/business";

const TITLE = "מדיניות פרטיות | יוסי מימוני";
const DESCRIPTION = "מדיניות הפרטיות של אתר יוסי מימוני — קבלן ושירותי שיפוצים.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

const sections = [
  {
    title: "כללי",
    body: `אתר ${business.name} מכבד את פרטיות המשתמשים בו. מדיניות זו מסבירה איזה מידע אנו אוספים, כיצד אנו משתמשים בו וכיצד אנו שומרים עליו.`,
  },
  {
    title: "המידע שאנו אוספים",
    body: "בעת יצירת קשר דרך טופס באתר אנו עשויים לאסוף פרטים כגון שם, מספר טלפון, כתובת דוא״ל ותוכן הפנייה. איננו אוספים מידע רגיש או מזהה נוסף מעבר לנדרש למתן מענה לפנייתכם.",
  },
  {
    title: "שימוש במידע",
    body: "המידע שנמסר משמש אותנו ליצירת קשר חוזר, מתן הצעת מחיר ומענה לפניות בלבד. המידע לא יועבר לצד שלישי למטרות שיווקיות ללא הסכמתכם.",
  },
  {
    title: "עוגיות (Cookies)",
    body: "האתר עשוי להשתמש בעוגיות בסיסיות לצורך תפעולו התקין. ניתן לחסום עוגיות בהגדרות הדפדפן, אך הדבר עלול להשפיע על חלק מהפונקציונליות.",
  },
  {
    title: "אבטחת מידע",
    body: "אנו נוקטים באמצעים סבירים כדי להגן על המידע שנמסר לנו, אך אין אפשרות להבטיח הגנה מוחלטת מפני כל שימוש לרעה.",
  },
  {
    title: "הזכויות שלכם",
    body: "באפשרותכם לבקש בכל עת לעיין, לתקן או למחוק מידע אישי שמסרתם לנו, על ידי פנייה אלינו בפרטי ההתקשרות המופיעים באתר.",
  },
  {
    title: "שינויים במדיניות",
    body: "אנו רשאים לעדכן מדיניות זו מעת לעת. הנוסח המעודכן יפורסם בעמוד זה.",
  },
  {
    title: "יצירת קשר",
    body: `לשאלות בנוגע למדיניות הפרטיות ניתן לפנות אלינו בטלפון ${business.phoneDisplay} או בדוא״ל ${business.emailDisplay}.`,
  },
];

function Privacy() {
  return (
    <section className="section-y">
      <div className="container-site max-w-3xl">
        <p className="eyebrow">מדיניות פרטיות</p>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">מדיניות פרטיות</h1>
        <p className="mt-4 text-sm text-muted-foreground">עדכון אחרון: [תאריך עדכון]</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold">{section.title}</h2>
              <p className="mt-3 leading-8 text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 rounded-lg border border-dashed border-border bg-surface p-4 text-sm text-muted-foreground">
          מסמך זה הינו תבנית כללית לצורך הרצה ראשונית של האתר. מומלץ להתאים את הנוסח לפעילות העסקית בפועל
          בסיוע יועץ משפטי לפני פרסום סופי.
        </p>
      </div>
    </section>
  );
}
