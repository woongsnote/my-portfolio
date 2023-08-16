import { Projects } from "../../lib/data";
import { SectionTitle } from "../common";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
  return (
    <section
      id="projects"
      className="items-center grid grid-cols-1 justify-center gap-8 my-8 mx-auto px-2 pt-16 w-10/12"
    >
      <SectionTitle title="Projects" />

      {Projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          tags={project.tags}
          githubUrl={project.githubUrl}
        />
      ))}
    </section>
  );
};

export default ProjectList;
