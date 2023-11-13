import { css } from "@/styled-system/css";
import { PageLinkProps } from "@/types";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";

const PageLinks = ({ link, githubLink }: PageLinkProps) => {
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "2",
      })}
    >
      <a
        href={githubLink}
        className={css({
          borderColor: "black",
          p: "2",
          rounded: "full",
          shadow: "md",
          cursor: "pointer",
        })}
      >
        <RiGithubLine />
      </a>
      <a
        href={link}
        className={css({
          borderColor: "black",
          p: "2",
          rounded: "full",
          shadow: "md",
          cursor: "pointer",
        })}
      >
        <RiExternalLinkLine />
      </a>
    </div>
  );
};

export default PageLinks;
