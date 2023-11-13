import { css } from "@/styled-system/css";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiInboxLine,
} from "react-icons/ri";
const SocialLinks = () => {
  const socials = [
    {
      title: "GitHub",
      icon: <RiGithubLine />,
      href: "https://github.com/woongsnote",
    },
    {
      title: "LinkedIn",
      icon: <RiLinkedinLine />,
      href: "https://linkedin.com/in/woongsnote",
    },
    {
      title: "Instagram",
      icon: <RiInstagramLine />,
      href: "https://instagram.com/woongsnote",
    },
    {
      title: "Blog",
      icon: <RiInboxLine />,
      href: "https://woongsnote.dev",
    },
  ];
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: "4",
        bgColor: { base: "gray.100", _dark: "#2c2c2c" },
        minH: "16",
        px: "4",
        rounded: "lg",
      })}
    >
      <span>Follow Me</span>
      <ul className={css({ display: "flex", gap: "4" })}>
        {socials.map((link) => (
          <li
            key={link.title}
            className={css({
              rounded: "full",
              borderColor: "black",
              shadow: "lg",
              fontSize: "md",
              bgColor: { base: "gary.300", _dark: "#373737" },
              p: "2",
              _hover: {
                border: "none",
                color: "white",
                bgColor: "blue.500",
                cursor: "pointer",
              },
            })}
          >
            <a href={link.href} target="_blank">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
