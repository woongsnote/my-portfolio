import { Project } from "@/types";
import profile from "@/public/about-image.png";
import Image from "next/image";
import { css } from "styled-system/css";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";
const ProjectCard = ({ project }: { project: Project }) => {
  const { title, tech, image, link, reviewLink } = project;

  const projectCardStyle = css({
    w: "full",
    shadow: "md",
    minH: "10",
    rounded: "md",
    p: "2",
    bg: { base: "white", _dark: "black" },
    _hover: { bg: "gray.300" },
  });

  return (
    <li className={projectCardStyle}>
      <div
        className={css({
          display: "flex",
          gap: "4",
          alignItems: "center",
          w: "full",
        })}>
        <div
          className={css({
            w: "12",
            h: "12",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          })}>
          {
            <Image
              src={image ?? profile}
              alt={title}
              priority
              className={css({ rounded: "lg", shadow: "lg" })}
            />
          }
        </div>
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            w: "full",
            alignItems: "center",
          })}>
          <div>
            <span className={css({ fontSize: { base: "md", lg: "lg" } })}>
              {title}
            </span>
            <p className={css({ color: "gray.400", fontSize: "sm" })}>
              {tech.join(", ")}
            </p>
          </div>
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "2",
            })}>
            <a
              href={link}
              className={css({
                borderColor: "black",
                p: "2",
                rounded: "full",
                shadow: "md",
                cursor: "pointer",
              })}>
              <RiGithubLine />
            </a>
            <a
              href={reviewLink}
              className={css({
                borderColor: "black",
                p: "2",
                rounded: "full",
                shadow: "md",
                cursor: "pointer",
              })}>
              <RiExternalLinkLine />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
