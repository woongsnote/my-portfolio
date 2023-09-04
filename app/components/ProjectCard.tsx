import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";

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
    <article className="mx-auto rounded-lg bg-gray-500">
      <Image
        src={image}
        alt={title}
        priority
        width={600}
        height={600}
        className="w-full h-40 rounded-t-lg"
      />
      <div className="p-4 rounded-b-lg">
        <h2 className="font-medium text-2xl">{title}</h2>
        <p className="text-base">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-row gap-2">
            {tags?.map((tag) => (
              <span key={tag} className="border p-1 rounded-md text-xs">
                {tag}
              </span>
            ))}
          </div>
          <a href={githubUrl} className="text-2xl mx-2">
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
