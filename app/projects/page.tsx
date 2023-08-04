import { PageTitle, ProjectList } from "../components";
import { Projects } from "../lib/data";

export default function ProjectPage() {
  return (
    <>
      <PageTitle title="Projects" />

      <ProjectList projects={Projects} />
    </>
  );
}
