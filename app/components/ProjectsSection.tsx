"use client";
import { PROJECTS, ProjectProps } from "@data";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sortedProjects = PROJECTS.sort(
    (a: ProjectProps, b: ProjectProps) =>
      +new Date(b.releaseDate) - +new Date(a.releaseDate)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-16">
      <SectionTitle title="My Projects" />
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 mt-8">
        {sortedProjects.map((project) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard
              title={project.title}
              image={project.image}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl ? project.githubUrl : ""}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
