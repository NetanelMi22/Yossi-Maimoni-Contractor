import kitchenImage from "@/assets/project-kitchen.jpg";
import bathroomImage from "@/assets/project-bathroom.jpg";
import homeImage from "@/assets/project-home.jpg";

/**
 * PLACEHOLDER PROJECTS.
 * These are NOT real projects and the images are NOT photographs of work
 * performed by the business. Replace every field with verified content.
 */

export type ProjectCategory =
  | "renovations"
  | "bathrooms"
  | "kitchens"
  | "homes"
  | "commercial";

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "הכול",
  renovations: "שיפוצים",
  bathrooms: "חדרי רחצה",
  kitchens: "מטבחים",
  homes: "בתים",
  commercial: "מסחרי",
};

export interface Project {
  slug: string;
  title: string;
  type: string;
  category: ProjectCategory;
  description: string;
  /** Only render when a real location is supplied. */
  location: string | null;
  image: string;
  /** Descriptive alt text for the main image. */
  imageAlt: string;
  gallery: string[];
  servicesPerformed: string[];
  /** True while the entry is placeholder content. */
  isPlaceholder: boolean;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "[PROJECT TITLE]",
    type: "[PROJECT TYPE]",
    category: "kitchens",
    description: "[PROJECT DESCRIPTION]",
    location: null,
    image: kitchenImage,
    imageAlt: "תמונת המחשה של מטבח מודרני — תמונת מציין מקום, אינה פרויקט שבוצע",
    gallery: [kitchenImage],
    servicesPerformed: [],
    isPlaceholder: true,
    featured: true,
  },
  {
    slug: "project-2",
    title: "[PROJECT TITLE]",
    type: "[PROJECT TYPE]",
    category: "bathrooms",
    description: "[PROJECT DESCRIPTION]",
    location: null,
    image: bathroomImage,
    imageAlt:
      "תמונת המחשה של חדר רחצה מעוצב — תמונת מציין מקום, אינה פרויקט שבוצע",
    gallery: [bathroomImage],
    servicesPerformed: [],
    isPlaceholder: true,
    featured: true,
  },
  {
    slug: "project-3",
    title: "[PROJECT TITLE]",
    type: "[PROJECT TYPE]",
    category: "homes",
    description: "[PROJECT DESCRIPTION]",
    location: null,
    image: homeImage,
    imageAlt:
      "תמונת המחשה של בית פרטי באתר בנייה — תמונת מציין מקום, אינה פרויקט שבוצע",
    gallery: [homeImage],
    servicesPerformed: [],
    isPlaceholder: true,
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
