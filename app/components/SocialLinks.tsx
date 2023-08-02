import Link from "next/link";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const SocialLinkItems = [
  {
    title: "GitHub",
    icon: <AiOutlineGithub />,
    href: "https://github.com/woongsnote",
  },
  {
    title: "Email",
    icon: <AiOutlineMail />,
    href: "mailto:woongsnote@gmail.com",
  },
  {
    title: "Instagram",
    icon: <AiOutlineInstagram />,
    href: "https://instagram.com/woongsnote",
  },
  {
    title: "LinkedIn",
    icon: <AiFillLinkedin />,
    href: "https://linkedin.com/in/woongsnote",
  },
];

const SocialLinks = () => {
  return (
    <ul className="flex flex-row space-x-3 text-2xl">
      {SocialLinkItems.map((item) => (
        <li key={item.title}>
          <Link href={item.href}>{item.icon}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
