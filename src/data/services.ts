/**
 * Proposed service categories — NOT verified facts about the business.
 * Toggle `enabled` to false to hide a service everywhere until it is confirmed.
 */
export type ServiceIcon =
  | "hammer"
  | "ruler"
  | "building"
  | "paintRoller"
  | "bath"
  | "hardHat";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  /** Longer copy used on /services. */
  description: string;
  /** Typical work included — proposed scope, replace with confirmed details. */
  includes: string[];
  icon: ServiceIcon;
  enabled: boolean;
}

export const services: Service[] = [
  {
    slug: "renovations",
    title: "שיפוצים",
    shortDescription: "שיפוץ דירות ובתים, מקצה לקצה, בליווי מלא לאורך הדרך.",
    description:
      "שיפוץ כללי של דירות ובתים פרטיים, כולל תיאום בעלי המקצוע וניהול לוחות הזמנים.",
    includes: ["הריסה ופינוי", "עבודות גבס", "ריצוף וחיפוי", "עבודות גמר"],
    icon: "hammer",
    enabled: true,
  },
  {
    slug: "remodeling",
    title: "שינויי תכנון ועיצוב",
    shortDescription: "התאמת החלל הקיים לצרכים ולסגנון החיים שלכם.",
    description:
      "שינוי חלוקת החלל, פתיחת קירות, יצירת חללים פתוחים והתאמת התכנון לשימוש היומיומי.",
    includes: ["שינוי חלוקת חדרים", "פתיחת קירות", "נישות ופתרונות אחסון"],
    icon: "ruler",
    enabled: true,
  },
  {
    slug: "construction",
    title: "בנייה",
    shortDescription: "עבודות בנייה ותוספות בנייה בביצוע מקצועי.",
    description:
      "ביצוע עבודות בנייה, תוספות בנייה והרחבות, בהתאם לתוכניות ולדרישות.",
    includes: ["יסודות ושלד", "תוספות בנייה", "עבודות טיח וחוץ"],
    icon: "building",
    enabled: true,
  },
  {
    slug: "painting",
    title: "צבע ועבודות גמר",
    shortDescription: "עבודות צבע וגמר נקיות עם תשומת לב לפרטים.",
    description:
      "צביעה, שפכטל, תיקוני גמר וכל הפרטים הקטנים שמשלימים את הפרויקט.",
    includes: ["שפכטל וצבע", "תיקוני גמר", "התקנות ופרטי גמר"],
    icon: "paintRoller",
    enabled: true,
  },
  {
    slug: "kitchens-bathrooms",
    title: "מטבחים וחדרי רחצה",
    shortDescription: "שדרוג מטבחים וחדרי רחצה בביצוע מדויק.",
    description:
      "שיפוץ מטבחים וחדרי רחצה, כולל אינסטלציה, חשמל, ריצוף, חיפוי והתקנות.",
    includes: ["אינסטלציה וחשמל", "ריצוף וחיפוי", "התקנת כלים וארונות"],
    icon: "bath",
    enabled: true,
  },
  {
    slug: "general-contracting",
    title: "קבלנות כללית",
    shortDescription: "ניהול וביצוע הפרויקט מול כל בעלי המקצוע.",
    description:
      "ניהול הפרויקט מתחילתו ועד סופו, תיאום בעלי מקצוע, פיקוח ובקרת איכות.",
    includes: ["ניהול פרויקט", "תיאום בעלי מקצוע", "בקרת איכות"],
    icon: "hardHat",
    enabled: true,
  },
];

export const enabledServices = services.filter((s) => s.enabled);
