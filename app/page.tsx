import { Hero, ProjectList } from "./components";
import { Projects } from "./lib/data";

export default function Home() {
  const recentProjects = Projects.slice(0, 2);

  return (
    <>
      <Hero />
      <div className="mx-auto flex flex-col items-center justify-center mt-4">
        <h2 className="text-3xl text-center border-b-4 w-fit pb-2">
          Recent Projects
        </h2>
        <ProjectList projects={recentProjects} />
      </div>
    </>
  );
}
