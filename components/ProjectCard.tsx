// import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { PROJECTS } from "@/lib/data";
import {
  Button,
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
    <Card isFooterBlurred className="w-full" shadow="sm">
      <CardHeader className="pb-0 pt-3 px-4 flex-col items-start">
        <small className="text-default-500">{description}</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible items-center justify-center h-40">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
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
    // <article className="mx-auto rounded-lg bg-gray-500 border border-gray-500">
    //   <Image
    //     src={image}
    //     alt={title}
    //     priority
    //     width={600}
    //     height={600}
    //     className="w-full h-48 rounded-t-lg"
    //   />
    //   <div className="p-4 rounded-b-lg">
    //     <h2 className="font-medium text-2xl">{title}</h2>
    //     <p className="text-base">{description}</p>
    //     <div className="flex items-center justify-between mt-2">
    //       <div className="flex flex-row gap-2">
    //         {tags?.map((tag) => (
    //           <span key={tag} className="border p-1 rounded-md text-xs">
    //             {tag}
    //           </span>
    //         ))}
    //       </div>
    //       <a href={githubUrl} className="text-2xl mx-2">
    //         <AiOutlineGithub />
    //       </a>
    //     </div>
    //   </div>
    // </article>
  );
};

export default ProjectCard;
