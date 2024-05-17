"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Project } from "@/types";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { ProjectImage, SliderButtons } from "@/components/Projects";

const ProjectList = ({ projects }: { projects: Project[] }) => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (s: SwiperClass) => {
    const currentIndex = s.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-8 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="w-full lg:w-1/2 lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
          <div className="flex flex-col gap-6 h-1/2 leading-none">
            <div className="text-8xl">{project.num}</div>
            <h2 className="text-4xl font-bold text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project
            </h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index) => (
                <li key={item.name} className="text-xl text-accent capitalize">
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            <Separator className="my-2" />
            <div className="flex gap-8 mt-2">
              <a href={project.live} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="size-12 rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>Live preview</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>
              <a href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="size-12 rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>Github repository</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className="mb-12 lg:h-[520px]">
            {projects.map((project) => (
              <SwiperSlide key={project.num} className="size-full">
                <ProjectImage project={project} />
              </SwiperSlide>
            ))}
            <SliderButtons
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
              buttonStyles="bg-accent hover:bg-accent-hover text-primary text-lg size-8 flex justify-center items-center transition-all"
              iconsStyles=""
            />
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectList;
