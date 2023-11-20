import { ProjectCard } from "@/components/project-card";
import { css } from "@/styled-system/css";
import { Project } from "@/types";

const projects: Project[] = [
  {
    title: "기술 블로그",
    description: `개발 관련 학습한 지식을 기록하고, 공유하기 위해 구현한 블로그입니다. 블로그를 시작할 때는 Next.js 와 Contentlayer로 구현했으나, 현재는 Astro를 사용해서 구현 및 운영 중입니다.`,
    tech: ["Astro", "TypeScript", "TailwindCSS"],
    image: "/tech-blog.png",
    githubLink: "https://github.com/woongsnote/woongsnote-dev",
    slug: "tech-blog",
    link: "https://woongsnote.dev",
    releaseDate: "2023-04-07",
    category: "Personal",
  },
  {
    title: "포트폴리오",
    description: "ContentLayer 블로그 구현을 위한 템플릿",
    tech: ["Next.js", "ContentLayer"],
    image: "/mdx-template.png",
    githubLink: "https://github.com/woongsnote/mdx-blog",
    slug: "mdx-blog-template",
    link: "",
    releaseDate: "2023-08-15",
    category: "Personal",
  },
  {
    title: "MDX Blog Template",
    description: "ContentLayer 블로그 구현을 위한 템플릿",
    tech: ["Next.js", "ContentLayer"],
    image: "/mdx-template.png",
    githubLink: "https://github.com/woongsnote/mdx-blog",
    slug: "mdx-blog-template",
    link: "",
    releaseDate: "2023-08-15",
    category: "Personal",
  },
];

export const ProjectList = () => {
  return (
    <div className={projectListStyle}>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

const projectListStyle = css({
  w: "full",
  display: "flex",
  alignItems: "start",
  justifyContent: { base: "center", lg: "space-between" },
  mx: "auto",
  gap: "4",
  mt: "4",
  flexWrap: "wrap",
});
