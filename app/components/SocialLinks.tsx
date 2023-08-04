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
  {
    title: "Blog",
    icon: <AiOutlineInbox />,
    href: "https://woongsnote.dev",
  },
];

const SocialLinks = () => {
  return (
    <ul className="flex flex-row space-x-3 text-2xl">
      {SocialLinkItems.map((item) => (
        <li
          key={item.title}
          className="rounded-full border-2 shadow-md p-3 w-fit h-fit hover:bg-sky-500 hover:text-white group relative"
        >
          {/* <div className="group relative w-full h-full"> */}
            <Link href={item.href}>{item.icon}</Link>
            <span className="absolute z-10 top-12 scale-0 transition-all rounded bg-gray-700 text-xs p-1.5 group-hover:scale-100">{item.title}</span>
          {/* </div> */}
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
