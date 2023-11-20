import { css } from "@/styled-system/css";
import { Project } from "@/types";
import Image from "next/image";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";

export const ProjectCard = ({ project }: { project: Project }) => {
  const { title, tech, image, description, link, githubLink, category } =
    project;

  return (
    <div className={projectCardStyle}>
      <div className="">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          priority
          className={projectImageStyle}
        />
      </div>
      <div className={projectContentStyle}>
        <h2 className={titleStyle}>{title}</h2>
        <p className={descriptionStyle}>{description}</p>
      </div>
      <div className={techListStyle}>
        {tech.map((t) => (
          <span key={t} className={techStyle}>
            #{t}
          </span>
        ))}
      </div>
      <div className={linkListStyle}>
        <a href={link} target="_blank">
          <RiExternalLinkLine />
        </a>
        <a href={githubLink} target="_blank">
          <RiGithubLine />
        </a>
      </div>
    </div>
  );
};

const projectCardStyle = css({
  w: { base: "full", lg: "1/3" },
  minH: "full",
  border: "1px solid #eee",
  rounded: "lg",
  display: "flex",
  flexDir: "column",
  gap: "2",
  shadow: "lg",
  overflow: "hidden",
  pos: "relative",
  h: "auto",
  bgColor: { base: "white", _dark: "#131313" },
  lg: {
    maxW: "320px",
  },
});

const projectContentStyle = css({
  display: "flex",
  flexDir: "column",
  p: "2",
  gap: "2",
  w: "full",
});

const titleStyle = css({
  fontWeight: "black",
  fontSize: { base: "lg", lg: "2xl" },
});

const descriptionStyle = css({
  wordBreak: "keep-all",
});

const projectImageStyle = css({
  w: "auto",
  h: "auto",
  mx: "auto",
});

const linkListStyle = css({
  borderTop: "1px solid #eee",
  display: "flex",
  w: "full",
  _hover: { display: "flex" },
  gap: "2",
  fontSize: { base: "lg", lg: "3xl" },
  p: "2",
  justifyContent: "end",
});

const techListStyle = css({
  display: "flex",
  gap: "2",
});

const techStyle = css({
  px: "2",
});
