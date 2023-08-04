import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  tags: string[];
  githubUrl: string;
}
const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="items-center grid grid-cols-1 md:grid-cols-2 justify-center gap-8 my-8 md:mx-auto px-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
          description={project.description}
          tags={project.tags}
          githubUrl={project.githubUrl}
        />
      ))}
    </div>
  );
};

export default ProjectList;
