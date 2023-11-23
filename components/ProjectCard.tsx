"use client";

import type { Project } from "@/types";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
const ProjectCard = ({ project }: { project: Project }) => {
  const { title, image, category, description } = project;

  return (
    <Card className='p-0 h-full overflow-hidden max-h-80'>
      <CardHeader className='bg-accent'>
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
      <div className='px-8 py-4'>
        <Badge className='text-sm  font-medium mb-2 absolute top-4 left-5'>
          {category}
        </Badge>
        <h4 className='text-2xl font-bold mb-1'>{title}</h4>
        <p className='text-muted-foreground break-keep pb-2'>{description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
