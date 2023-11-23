"use client";

import type { Project } from "@/types";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

const GITHUB_URL = "https://github.com/woongsnote";
const ProjectCard = ({ project }: { project: Project }) => {
  const { title, image, category, description, tech, githubRepo } = project;
  const githubUrl = `${GITHUB_URL}${githubRepo}`;
  
  return (
    <Card className='p-0 overflow-hidden w-full h-full xl:max-h-96 max-w-sm hover:shadow-lg hover:scale-110 transition-all'>
      <CardHeader className='bg-secondary'>
        <div className='relative w-full h-40 flex items-center justify-center p-4'>
          <Image
            src={image}
            alt={title}
            width={200}
            height={120}
            className='absolute bottom-0 shadow-2xl w-auto rounded-md object-center h-auto max-h-32'
            priority
          />
        </div>
      </CardHeader>
      <div className='px-8 py-4 flex flex-col gap-y-2'>
        <Badge className='text-sm font-medium mb-2 absolute top-4 left-5'>
          {category}
        </Badge>
        <h4 className='text-2xl font-bold'>{title}</h4>
        <p className='text-muted-foreground break-keep text-sm'>
          {description}
        </p>
        <div className='flex flex-wrap gap-2'>
          {tech.map((tech) => (
            <span key={tech} className='text-sm'>
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
