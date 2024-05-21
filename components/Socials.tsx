import { FaGithub, FaLinkedin, FaInstagram, FaBlog } from "react-icons/fa";

type Social = {
  icon: React.ReactNode;
  path: string;
};

const socials: Social[] = [
  { icon: <FaGithub />, path: "https://github.com/woongsnote" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/woongsnote" },
  { icon: <FaInstagram />, path: "https://instagram.com/woongsnote" },
  { icon: <FaBlog />, path: "https://woongsnote.dev" },
];

type SocialStyles = {
  containerStyles: string;
  iconStyles: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialStyles) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon, path }, index) => (
        <a href={path} key={index} className={iconStyles} target="_blank">
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
