import { ProjectHero } from "@/components/ProjectHero";
import rectangle from "../../../public/rectangle.jpg";
import { TextBlock } from "@/components/TextBlock";
import { Photostrip } from "@/components/Photostrip";

const images = [
  "/cat.jpg",
  "/cat2.jpg",
  "/cat3.jpeg",
];

export default async function Project() {
  return (
    <div className="ml-8 sm:ml-10 flex flex-col gap-16 mb-32">
      <ProjectHero
        title="Projects"
        description="I'm describing to you what this project is about."
        image={rectangle}
      />
      <Photostrip images={images} />

      <TextBlock
        title="Stacc WorkShop 2023"
        description="Make Your Own Website"
      />
      <TextBlock
        title="Cry"
        description="Every day."
      />
            <TextBlock
        title="Project HW"
        description="Every good student does their homework."
      />
    </div>
  );
}
