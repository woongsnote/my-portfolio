"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { experience, about, skills, education } from "./data";
const Resume = () => {
  return (
    <div className="flex items-center mx-auto min-h-[80vh] py-12 xl:py-0 w-full max-w-5xl">
      <Tabs
        className="flex flex-col lg:flex-row gap-10 w-full"
        defaultValue="experience">
        <TabsList className="flex flex-col w-full mx-auto max-w-[380px] lg:mx-0 gap-6">
          <TabsTrigger className="" value="experience">
            Experience
          </TabsTrigger>
          <TabsTrigger className="" value="education">
            Education
          </TabsTrigger>
          <TabsTrigger className="" value="skills">
            Skills
          </TabsTrigger>
          <TabsTrigger className="" value="about">
            About me
          </TabsTrigger>
        </TabsList>
        <div className="w-full min-h-[70vh]">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-6 text-center lg:text-start mb-8">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-3xl text-white/60 mx-auto lg:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-72">
                <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {experience.items.map((item) => (
                    <li
                      key={item.company}
                      className="flex flex-col justify-center items-center lg:items-start gap-1 bg-[#232329] py-4 px-8 rounded-xl">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-72 min-h-16">
                        {item.position}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="bg-accent size-2 rounded-full"></span>
                        <p>{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education">
            <div className="flex flex-col gap-6 text-center lg:text-start">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-3xl text-white/60 mx-auto lg:mx-0">
                {education.description}
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {education.items.map((item) => (
                  <li key={item.institution}>
                    <span>{item.duration}</span>
                    <h3>{item.degree}</h3>
                    <span>{item.institution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="skills">
            <div className="flex flex-col gap-8 text-center lg:text-start">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-3xl text-white/60 mx-auto lg:mx-0">
                {skills.description}
              </p>
              <ScrollArea className="h-[200px]">
                <ul className="grid grid-cols-1 gap-4">
                  {skills.items.map((item) => (
                    <li key={item.title}>
                      <span>{item.title}</span>
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="about">
            <div className="flex flex-col gap-8 text-center lg:text-start">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-3xl text-white/60 mx-auto lg:mx-0">
                {about.description}
              </p>
              <ScrollArea className="h-[200px]">
                <ul className="grid grid-cols-1 gap-4">
                  {about.info.map((item) => (
                    <li key={item.fieldName}>
                      <span>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Resume;
