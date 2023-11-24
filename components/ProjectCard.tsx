"use client";

import type { Project } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { RiGithubFill, RiLinksLine } from "react-icons/ri";
import Link from "next/link";
import { Button } from "./ui/button";

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    title,
    image,
    category,
    description,
    tech,
    link,
    githubRepo,
    reviewLink,
  } = project;

  return (
    <Card className='group relative overflow-hidden max-w-sm hover:shadow-lg transition-all mx-auto '>
      <CardHeader className='p-0 bg-primary/20'>
        <div className='relative w-full h-52 flex items-center justify-center'>
          <Image
            src={image}
            alt={title}
            width={200}
            height={120}
            className='absolute bottom-4 shadow-2xl w-auto max-h-32 mx-auto rounded-md object-center h-auto'
            priority
          />
          <div className='flex gap-x-4 z-20'>
            <Link
              href={link ? link : reviewLink}
              className='flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 rounded-full bg-primary dark:bg-accent'>
              <Button variant='link' size='icon'>
                <RiLinksLine className='w-8 h-8 text-white' />
              </Button>
            </Link>
            <Link
              href={githubRepo}
              className='flex items-center justify-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 rounded-full bg-primary dark:bg-accent'>
              <Button variant='link' size='icon'>
                <RiGithubFill className='w-8 h-8 text-white' />
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent className='px-4 py-2 gap-y-2 flex flex-col h-32'>
        <Badge className='text-sm font-medium mb-2 absolute top-4 left-5'>
          {category}
        </Badge>
        <h4 className='text-2xl font-bold'>{title}</h4>
        <p className='text-muted-foreground break-keep text-sm'>
          {description}
        </p>
      </CardContent>
      <CardFooter className='flex gap-x-2 text-sm'>
        {tech.map((tech) => (
          <span key={tech}>#{tech}</span>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
