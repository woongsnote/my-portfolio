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
    <div className="card-wrapper w-full max-w-sm h-[30rem] max-h-max mx-auto break-keep">
      <div className="card-content flex items-center justify-center text-start w-full">
        <div className="p-3 flex flex-col gap-3">
          <span className="capitalize">{category}</span>
          <h2 className="text-accent text-3xl">{title}</h2>
          <p className="text-white/60">{description}</p>
          <div className="w-full h-auto rounded-lg overflow-hidden flex flex-col">
            <Image
              src={image}
              alt={title}
              width={800}
              height={480}
              sizes="100vw"
              className="w-full h-auto object-cover object-center"
              priority
            />
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-4 mt-2">
            {stack?.map((item) => (
              <span key={item} className="capitalize text-sm lg:text-lg">
                #{item}
              </span>
            ))}
          </div>
          <div className="flex gap-8 my-2 justify-end">
            <a href={github} target="_blank">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="size-10 rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>{github}</TooltipContent>
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
                    <TooltipContent>{live}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
