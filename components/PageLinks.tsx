import { css } from "@/styled-system/css";
import { PageLinkProps } from "@/types";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";

const PageLinks = ({ link, githubLink }: PageLinkProps) => {
  const linkStyle = css({
    borderColor: "black",
    p: "2",
    rounded: "full",
    shadow: "md",
    cursor: "pointer",
    _hover: { bgColor: "blue.500" },
  });

  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "2",
      })}>
      <a href={githubLink} className={linkStyle}>
        <RiGithubLine />
      </a>
      <a href={link} className={linkStyle}>
        <RiExternalLinkLine />
      </a>
    </div>
  );
};

export default PageLinks;
