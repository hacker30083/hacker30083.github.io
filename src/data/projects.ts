export type TechCategory = "web" | "mobile" | "language" | "tool" | "ai";

export interface Tech {
  label: string;
  category: TechCategory;
}

export interface Project {
  slug: string;
  title: string;
  credit: string;
  description: string;
  image: string;
  imageAlt: string;
  links: { label: string; href: string }[];
  tech: Tech[];
}

export const projects: Project[] = [
  {
    slug: "tunniplaan",
    title: "Automatic timetable generator",
    credit: "By mk41 and me",
    description:
      "Generates a personal timetable based on Edupage data",
    image: "/resources/timetable-home.png",
    imageAlt: "Screenshot of the automatic timetable generator's homepage",
    links: [{ label: "Open app", href: "https://kasparaun.com/tunniplaan" }],
    tech: [
      { label: "React", category: "web" },
      { label: "TypeScript", category: "language" },
    ],
  },
  {
    slug: "tuhat-app",
    title: "Card game points app",
    credit: "By me and Gemini AI",
    description:
      "A score tracker for Tuhat, the card game — keeps running totals so no one has to do the maths at the table.",
    image: "/resources/tuhat-app.png",
    imageAlt: "Screenshot of the Tuhat card game points tracker app",
    links: [{ label: "View on GitHub", href: "https://github.com/hacker30083/tuhat-app" }],
    tech: [
      { label: "Android", category: "mobile" },
      { label: "Java", category: "language" },
      { label: "Gradle", category: "tool" },
    ],
  },
  {
    slug: "protera-learning-materials",
    title: "Learning materials list",
    credit: "By me",
    description:
      "List of learning materials for ProTERA",
    image: "/resources/protera-learning-materials.png",
    imageAlt: "Screenshot of the ProTERA learning materials page",
    links: [{ label: "Open website", href: "https://github.com/hacker30083/protera-learning-materials" }],
    tech: [
      { label: "HTML", category: "web" },
      { label: "CSS", category: "web"}
    ],
  },
];
