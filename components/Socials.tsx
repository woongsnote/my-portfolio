import {
  RiGithubFill,
  RiLinkedinFill,
  RiInstagramLine,
  RiInbox2Fill,
} from "react-icons/ri";

type Social = {
  title: string;
  icon: React.ReactElement;
  href: string;
};

const SocialLinkItems: Social[] = [
  {
    title: "GitHub",
    icon: <RiGithubFill className="" />,
    href: "https://github.com/woongsnote",
  },
  {
    title: "Instagram",
    icon: <RiInstagramLine className="" />,
    href: "https://instagram.com/woongsnote",
  },
  {
    title: "LinkedIn",
    icon: <RiLinkedinFill className="" />,
    href: "https://linkedin.com/in/woongsnote",
  },
  {
    title: "Blog",
    icon: <RiInbox2Fill className="" />,
    href: "https://woongsnote.dev",
  },
];

const Socials = () => {
  return (
    <div className="flex w-full gap-x-6 mx-auto xl:mx-0 items-center justify-center md:justify-start">
      {SocialLinkItems.map((item) => (
        <a
          key={item.title}
          className="text-foreground text-3xl drop-shadow-xl hover:text-primary hover:scale-125 transition-all"
          href={item.href}
          target="_blank"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
