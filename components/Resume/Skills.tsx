import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiAstro,
} from "react-icons/si";

const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    {
      name: "html 5",
      icon: <SiHtml5 />,
    },
    {
      name: "css 3",
      icon: <SiCss3 />,
    },
    {
      name: "javascript",
      icon: <SiJavascript />,
    },
    {
      name: "typescript",
      icon: <SiTypescript />,
    },
    {
      name: "react.js",
      icon: <SiReact />,
    },
    {
      name: "next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "tailwind.css",
      icon: <SiTailwindcss />,
    },
    {
      name: "astro",
      icon: <SiAstro />,
    },
  ],
};
const Skills = () => {
  return (
    <div className="flex flex-col gap-8 text-center lg:text-start">
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl font-bold">{skills.title}</h3>
        <p>{skills.description}</p>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.skillList.map(({ name, icon }) => {
          return (
            <li key={name}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-full bg-[#232329] rounded-xl flex items-center justify-center group h-36">
                    <div className="text-5xl  group-hover:text-accent transition-all duration-300">
                      {icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-lg">{name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
