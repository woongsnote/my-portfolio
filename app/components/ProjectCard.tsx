import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import Tag from "./Tag";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <article className="flex flex-col rounded-lg overflow-hidden shadow-md md:hover:scale-105 transition duration-300">
      <Image
        src={image}
        alt={title}
        priority
        width={600}
        height={200}
        className="h-48 object-center"
      />
      <h1 className="pl-2 py-1 border-t font-semibold text-2xl">{title}</h1>
      <h2 className="pl-2 text-sm md:text-lg">{description}</h2>
      <div className="flex items-center justify-between">
        <div className="flex flex-row gap-2 p-2">
          {tags?.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <a href={githubUrl} className="text-2xl mx-2">
          <AiOutlineGithub />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
