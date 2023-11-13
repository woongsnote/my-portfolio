"use client";
import { motion } from "framer-motion";
import ProjectList from "@/components/ProjectList";
import { css } from "@/styled-system/css";
import { Project } from "@/types";
import { Projects } from "@/data/projects";
import PageTitle from "@/components/PageTitle";

export default function ProjectsPage() {
  const projects: Project[] = Projects;

  const teamProjects = Projects.filter(
    (project) => project.category === "Team"
  );

  const personalProjects = Projects.filter(
    (project) => project.category === "Personal"
  );

  const projectsStyle = css({
    bgColor: { base: "gray.100", _dark: "#2c2c2c" },
    my: "4",
    p: "2",
    rounded: "lg",
    shadow: "lg",
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div>
        <PageTitle title="Projects" />
      </div>
      <div className={projectsStyle}>
        <h2>Personal Projects</h2>
        <ProjectList projects={personalProjects} />
      </div>
      <div className={projectsStyle}>
        <h2>Team Projects</h2>
        <ProjectList projects={teamProjects} />
      </div>
    </motion.div>
  );
}
