import { CVSection } from "@/components/CVSection";

const sections = [
  {
    title: "Experience",
    sectionTitle: "Arbeidssted | Rolle",
    period: "Måned YYYY - Måned YYYY",
    description:
      "..",
  },
  {
    title: "Education",
    sectionTitle: "Western Norway University of Applied Sciences | Computer Engineering",
    period: "august 2022 - june 2025",
    description:
      "I'm a computer engineer!",
  },
];

export default function CV() {
  return (
    <div className="container mx-auto mt-32 px-8 gap-16 flex flex-col">
      {sections.map((section) => {
        return <CVSection {...section} key={section.title} />;
      })}
    </div>
  );
}
