"use client";
import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsData as projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

const uniqueCategories = [
  "All",
  ...new Set(projects.map((proj) => proj.category)),
];

console.log(uniqueCategories);

export default function Projects() {
  const [category, setCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    return category === "All" ? projects : project.category === category;
  });

  console.log(filteredProjects);

  return (
    <section className="min-h-screen">
      <PageTitle title="My Projects" />
      <div className="w-full">
        <Tabs defaultValue="All">
          <TabsList className="w-full h-full grid md:grid-cols-3 lg:max-w-2xl mb-12 mx-auto md:border dark:border-none">
            {uniqueCategories.map((category) => (
              <TabsTrigger
                value={category}
                key={category}
                className="w-48 md:w-auto"
                onClick={() => setCategory(category)}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg xl:mt-8 grid lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => {
              return (
                <TabsContent value={category} key={project.title}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
