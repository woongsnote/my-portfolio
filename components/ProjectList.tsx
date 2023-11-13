import { css } from "@/styled-system/css";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

const projects: Project[] = [
  { title: "Tech Blog", tech: ["Astro", "TypeScript", "TailwindCSS"] },
  { title: "Portfolio", tech: ["Next.js", "TypeScript", "PandaCSS"] },
  { title: "Mini Pick", tech: ["Next.js", "TypeScript", "TailwindCSS"] },
];
const ProjectList = () => {
  const projectsContainerStyle = css({
    p: "2",
    mt: "4",
  });

  return (
    <div className={projectsContainerStyle}>
      <ul
        className={css({
          w: "full",
          display: "flex",
          flexDir: "column",
          gap: "4",
        })}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
