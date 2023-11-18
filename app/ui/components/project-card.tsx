import { css } from "@/styled-system/css";
import { Project } from "@/types";
import Image from "next/image";

export const ProjectCard = ({ project }: { project: Project }) => {
  const {
    title,
    tech,
    image,
    description,
    link,
    githubLink,
    releaseDate,
    category,
  } = project;

  return (
    <div className={projectCardStyle}>
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        priority
        className={projectImageStyle}
      />
      <h2 className={titleStyle}>{title}</h2>
      <p className={descriptionStyle}>{description}</p>
      <div>
        <a href={link} target="_blank">
          프로젝트 보러가기
        </a>
        <span> | </span>
        <a href={githubLink} target="_blank">
          프로젝트 소스 코드
        </a>
      </div>
    </div>
  );
};

const projectCardStyle = css({
  w: { base: "full", lg: "1/3" },
  border: "1px solid #eee",
  rounded: "md",
  p: "2",
  display: "flex",
  flexDir: "column",
  gap: "2",
});

const titleStyle = css({
  fontWeight: "black",
});

const descriptionStyle = css({
  wordBreak: "keep-all",
});

const projectImageStyle = css({
  w: "auto",
  h: "auto",
  mx: "auto",
});
