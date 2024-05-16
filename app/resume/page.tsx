"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Skills from "../../components/Resume/Skills";
import About from "../../components/Resume/About";
import Education from "../../components/Resume/Education";
import Experience from "../../components/Resume/Experience";

const Resume = () => {
  return (
    <div className="flex items-center mx-auto min-h-[80vh] py-12 xl:py-0 w-full max-w-5xl">
      <Tabs
        className="flex flex-col lg:flex-row gap-10 w-full"
        defaultValue="experience"
      >
        <TabsList className="flex flex-col w-full mx-auto max-w-[380px] lg:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        <div className="w-full min-h-[70vh]">
          <TabsContent value="experience" className="w-full">
            <Experience />
          </TabsContent>
          <TabsContent value="education" className="w-full">
            <Education />
          </TabsContent>
          <TabsContent value="skills" className="size-full">
            <Skills />
          </TabsContent>
          <TabsContent
            value="about"
            className="w-full text-center lg:text-start"
          >
            <About />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Resume;
