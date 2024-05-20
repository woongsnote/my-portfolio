import { projects } from "@/data";
import { ProjectCard } from "@/components/Projects";

const Portfolio = () => {
  const latestProjects = projects.slice(0, 2);

  return (
    <section className="container">
      <h3 className="text-center text-4xl font-bold mb-8">최신 프로젝트</h3>
      <div className="flex flex-wrap">
        {latestProjects?.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
