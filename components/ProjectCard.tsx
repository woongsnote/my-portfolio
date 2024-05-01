"use client";

import type { Project } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    title,
    image,
    category,
    description,
    tag: tech,
    githubRepo,
    isTeam,
    members,
  } = project;

  return (
    <a href={githubRepo} target="_blank">
      <Card className="group relative overflow-hidden max-w-sm hover:shadow-lg transition-all mx-auto">
        <CardHeader className="p-0 bg-primary/20">
          <div className="relative w-full h-52 flex items-center justify-center">
            <Image
              src={image}
              alt={title}
              width={200}
              height={120}
              className="absolute bottom-4 shadow-2xl w-auto max-h-32 mx-auto rounded-md object-center h-auto"
              priority
            />
          </div>
        </CardHeader>
        <CardContent className="px-4 py-2 gap-y-2 flex flex-col h-32">
          <Badge className="text-sm font-medium mb-2 absolute top-4 left-5">
            {category}
          </Badge>
          <h4 className="text-2xl font-bold">{title}</h4>
          <p className="text-muted-foreground break-keep text-sm">
            {description}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-y-2 text-sm w-full text-start">
          <p className="w-full text-start">
            {isTeam ? <>팀 프로젝트 ({members})</> : <>개인 프로젝트</>}
          </p>
          <p className=" w-full flex gap-x-2 text-start">
            {tech.map((tech) => (
              <span key={tech}>#{tech}</span>
            ))}
          </p>
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
