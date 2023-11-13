export type Project = {
  title: string;
  tech: string[];
  image: string;
  description: string;
  link: string;
  githubLink: string;
  releaseDate: string;
  slug: string;
  category: "Team" | "Personal";
};

export type PageLinkProps = {
  link: string;
  githubLink: string;
};
