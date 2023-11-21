import { css } from "@/styled-system/css";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineInbox,
} from "react-icons/ai";

const SocialLinkItems = [
  {
    title: "GitHub",
    icon: (
      <AiOutlineGithub
        className={css({
          _groupHover: { color: "purple.500" },
        })}
      />
    ),
    href: "https://github.com/woongsnote",
  },
  {
    title: "Instagram",
    icon: (
      <AiOutlineInstagram
        className={css({
          _groupHover: { color: "red.500" },
        })}
      />
    ),
    href: "https://instagram.com/woongsnote",
  },
  {
    title: "LinkedIn",
    icon: (
      <AiFillLinkedin
        className={css({
          _groupHover: { color: "blue.700" },
        })}
      />
    ),
    href: "https://linkedin.com/in/woongsnote",
  },
  {
    title: "Blog",
    icon: (
      <AiOutlineInbox
        className={css({
          _groupHover: { color: "sky.500" },
        })}
      />
    ),
    href: "https://woongsnote.dev",
  },
];

export const SocialLinks = () => {
  return (
    <ul className={socialLinksStyle}>
      {SocialLinkItems.map((item) => (
        <li key={item.title} className={`group ${socialLinkStyle}`}>
          <a href={item.href} target='_blank'>
            {item.icon}
          </a>
          <span className={helperTextStyle}>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

const socialLinksStyle = css({
  display: "flex",
  gap: "4",
  alignItems: "center",
  justifyContent: "center",
  w: { base: "full", lg: "fit" },
});

const socialLinkStyle = css({
  rounded: "full",
  w: "fit",
  h: "fit",
  pos: "relative",
  p: "3",
  shadow: "lg",
  _hover: { scale: 1.2 },
  bgColor: { base: "white", _dark: "black" },
});

const helperTextStyle = css({
  pos: "absolute",
  zIndex: 20,
  top: 12,
  fontSize: "xs",
  scale: 0,
  _groupHover: { scale: 1 },
  p: "2",
  rounded: "lg",
});
