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
    <article className="mt-4 md:w-9/12 mx-auto">
      <div className="flex items-center justify-center mx-auto">
        <Image
          src={image}
          alt={title}
          priority
          width={600}
          height={400}
          className="w-auto h-auto border shadow-lg rounded-lg"
        />
      </div>
      <div className="my-8 sm:w-10/12 mx-auto">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className="pl-2 text-sm md:text-lg">{description}</p>
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
      </div>
    </article>
  );
};

export default ProjectCard;
