export type Project = {
  title: string;
  tag: string[];
  image: string;
  description: string;
  githubRepo: string;
  category: string;
  isTeam: boolean;
  members?: string;
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

export type TExperience = {
  title: string;
  description: string;
  items: { company: string; duration: string; position: string }[];
};

export type TEducation = {
  title: string;
  description: string;
  items: {
    institution: string;
    degree: string;
    duration: string;
  }[];
};
