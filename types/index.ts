export type Project = {
  title: string;
  tech: string[];
  image: string;
  description: string;
  link?: string;
  reviewLink: string;
  githubRepo: string;
  category: string;
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
  company: string;
  years: string;
  role: string;
};

export type Education = {
  university?: string;
  company?: string;
  qualification: string;
  years: string;
};
