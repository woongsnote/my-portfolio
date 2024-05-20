import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAstro,
} from "react-icons/si";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { GridContainer } from "@/components/Common";

const skills = {
  title: "기술 스택",
  skillList: [
    {
      name: "Javascript",
      icon: <SiJavascript />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "React",
      icon: <SiReact />,
    },
    {
      name: "Tailwindcss",
      icon: <SiTailwindcss />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Astro",
      icon: <SiAstro />,
    },
  ],
};
const Skills = () => {
  return (
    <GridContainer
      title={skills.title}
      containerClassName="flex flex-col gap-6 lg:gap-12 text-center lg:text-start col-span-2 bg-[#232329] p-8 rounded-xl"
    >
      <ul className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
        {skills.skillList.map(({ name, icon }) => {
          return (
            <li
              key={name}
              className="w-full lg:w-fit flex items-center justify-center"
            >
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger
                    asChild
                    className="w-fit rounded-xl flex items-center justify-center"
                  >
                    <div className="text-5xl items-center justify-center hover:text-accent transition-all duration-300">
                      {icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p className="text-lg">{name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </GridContainer>
  );
};

export default Skills;
