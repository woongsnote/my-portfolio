import Link from "next/link";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineInbox,
} from "react-icons/ai";

const SocialLinkItems = [
  {
    title: "GitHub",
    icon: <AiOutlineGithub />,
    href: "https://github.com/woongsnote",
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
  {
    title: "Blog",
    icon: <AiOutlineInbox />,
    href: "https://woongsnote.dev",
  },
];

const SocialLinks = () => {
  return (
    <ul className="flex flex-row gap-4 text-2xl my-6 items-center justify-center w-full lg:w-fit">
      {SocialLinkItems.map((item) => (
        <li
          key={item.title}
          className="rounded-full border-2 shadow-md p-3 w-fit h-fit hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 hover:text-white group relative"
        >
          <Link href={item.href}>{item.icon}</Link>
          <span className="absolute z-20 top-14 scale-0 transition-all rounded border text-xs p-1.5 group-hover:scale-100 text-black dark:text-white">
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
