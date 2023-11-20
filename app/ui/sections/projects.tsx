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
  gap: "4",
  lg: { gap: "8" },
  alignItems: "center",
  justifyContent: "start",
  py: "20",
  px: "2",
  w: "full",
  minH: "screen",
  h: "full",
  flexDir: "column",
});
