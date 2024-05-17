import Image from "next/image";
import { Project } from "@/types";

//TODO update styles
const ProjectImage = ({ project }: { project: Project }) => {
  return (
    <div className="h-[400px] relative flex group items-center justify-center bg-pink-50/20">
      <div className="absolute top-0 bottom-0 size-full bg-black/10 z-10"></div>
      <div className="relative size-full">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover"
          fill
          sizes="lg"
        />
      </div>
    </div>
  );
};

export default ProjectImage;
