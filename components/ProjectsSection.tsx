"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const ProjectsSection = () => {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  let projects = [...PROJECTS];

  const sortedProjects = projects.sort(
    (a, b) => +new Date(b.releaseDate) - +new Date(a.releaseDate)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-20 px-2 min-h-screen">
      <SectionTitle title="My Projects" />
      <ul
        ref={ref}
        className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8"
      >
        {sortedProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard {...project} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
