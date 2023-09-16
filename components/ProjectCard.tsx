import { AiOutlineGithub } from "react-icons/ai";
import { PROJECTS } from "@/lib/data";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
} from "@nextui-org/react";

type ProjectCardProps = (typeof PROJECTS)[number];

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <Card shadow="sm" isHoverable fullWidth className="hover:scale-110">
      <CardHeader className="pb-0 pt-3 px-4 flex-col items-start">
        <small className="text-default-500">{description}</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible items-center justify-center h-40">
        <a href={githubUrl}>
          <Image
            alt="Card background"
            className="object-cover rounded-md border dark:border-none"
            src={image}
            width={270}
          />
        </a>
      </CardBody>
      <CardFooter className="justify-between items-center shadow-small">
        <div className="flex flex-row gap-2">
          {tags?.map((tag) => (
            <Chip key={tag} size="sm" radius="md" variant="bordered">
              {tag}
            </Chip>
          ))}
        </div>
        <a href={githubUrl} className="text-2xl mx-2">
          <AiOutlineGithub />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
