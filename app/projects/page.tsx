import ProjectCard from "@/components/Projects/ProjectCard";
import { projects } from "@/data";

const MyProjects = () => {
  return (
    <section className="pb-12">
      <h2 className="text-center text-4xl mb-10">전체 프로젝트</h2>
      <div className="flex flex-wrap gap-x-4 gap-y-14">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
