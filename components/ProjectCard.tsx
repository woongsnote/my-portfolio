import type { Project } from "@/types";
import Image from "next/image";
const ProjectCard = ({ project }: { project: Project }) => {
  const { title, tech, image, category, description } = project;

  return (
    <div className="w-full mx-auto flex flex-col bg-accent p-2 h-80 rounded-lg">
      <div className="flex items-center mx-auto p-2">
        <Image
          src={image}
          alt="title"
          width={800}
          height={480}
          className="w-full h-full object-cover rounded-md max-w-xs"
        />
      </div>
      <div>
        <h2 className="font-bold">{title}</h2>
        <p className="break-keep">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
