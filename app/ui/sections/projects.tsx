import { css } from "@/styled-system/css";
import { SectionTitle } from "@/components/section-title";
import { ProjectList } from "@/components/project-list";

export const ProjectsSection = () => {
  return (
    <section id="projects" className={projectsSectionStyle}>
      <SectionTitle title="My Projects" />
      <ProjectList />
    </section>
  );
};

const projectsSectionStyle = css({
  display: "flex",
  flexDir: "column",
  minH: "screen",
  alignItems: "center",
  justifyContent: "center",
});
