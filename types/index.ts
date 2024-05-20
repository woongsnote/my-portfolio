export type Project = {
  category: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  live?: string;
  github: string;
};

export type PageLinkProps = {
  link: string;
  githubLink: string;
};

export type NavLink = {
  title: string;
  href: string;
};

export type Info = {
  icon: React.ReactNode;
  text: string;
};

export type Experience = {
  title: string;
  description: string;
  items: { company: string; duration: string; position: string }[];
};

export type Education = {
  title: string;
  description: string;
  items: {
    institution: string;
    degree: string;
    duration: string;
  }[];
};
