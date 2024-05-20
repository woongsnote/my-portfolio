import { Project } from "@/types";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, description, image, category, stack, github, live } = project;

  return (
    <div className="w-full border max-w-lg mx-auto p-4 rounded-xl break-keep relative border-white/10">
      <span className="capitalize">{category}</span>
      <h2 className="text-accent text-3xl">{title}</h2>
      <p className="text-white/60">{description}</p>
      {/* TODO */}
      <div className="w-full h-48 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          width="300"
          height="300"
          className="size-full"
        />
      </div>
      <div className="flex flex-wrap gap-4 my-4 aspect-auto">
        {stack?.map((item) => (
          <span key={item} className="capitalize">
            #{item}
          </span>
        ))}
      </div>
      <div className="flex gap-8 mt-2 justify-end">
        <a href={github} target="_blank">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="size-10 rounded-full bg-white/5 flex justify-center items-center group">
                <BsGithub className="text-white text-xl group-hover:text-accent" />
              </TooltipTrigger>
              <TooltipContent>Github repository</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </a>
        {live && (
          <a href={live} target="_blank">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="size-10 rounded-full bg-white/5 flex justify-center items-center group">
                  <BsArrowUpRight className="text-white text-xl group-hover:text-accent" />
                </TooltipTrigger>
                <TooltipContent>Live preview</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
