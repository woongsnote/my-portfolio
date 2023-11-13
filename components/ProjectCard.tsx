import { Project } from "@/types";
import { css } from "styled-system/css";
import { RiArrowRightSLine, RiGroupFill, RiUserFill } from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ project }: { project: Project }) => {
  const { title, tech, slug, category } = project;

  const projectCardStyle = css({
    w: "full",
    shadow: "md",
    minH: "10",
    rounded: "md",
    p: "2",
    bg: { base: "white", _dark: "#373737" },
    _hover: { bg: { base: "gray.300", _dark: "#202020" } },
  });

  return (
    <motion.li className={projectCardStyle}>
      <div
        className={css({
          display: "flex",
          gap: "4",
          alignItems: "center",
          w: "full",
        })}
      >
        <span
          className={css({
            bgColor: "black",
            color: "white",
            rounded: "full",
            p: "2",
            fontSize: "lg",
          })}
        >
          {category === "Personal" ? <RiUserFill /> : <RiGroupFill />}
        </span>

        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            w: "full",
            alignItems: "center",
          })}
        >
          <div>
            <span className={css({ fontSize: { base: "md", lg: "lg" } })}>
              {title}
            </span>
            <p className={css({ color: "gray.400", fontSize: "sm" })}>
              {tech.join(", ")}
            </p>
          </div>
          <Link
            href={`projects/${slug}`}
            className={css({ fontSize: "3xl", _hover: { color: "blue.500" } })}
          >
            <RiArrowRightSLine />
          </Link>
        </div>
      </div>
    </motion.li>
  );
};

export default ProjectCard;
