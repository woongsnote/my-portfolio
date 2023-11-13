import PageLinks from "@/components/PageLinks";
import PageTitle from "@/components/PageTitle";
import { Projects } from "@/data/projects";
import { css } from "@/styled-system/css";
import { Project } from "@/types";
import Image from "next/image";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const getDetail = (slug: string): Project => {
    return Projects.find((project) => project.slug === slug) as Project;
  };

  const { title, link, githubLink, description, image } = getDetail(
    params.slug
  );

  return (
    <div className={css({ display: "flex", flexDir: "column", gap: "4" })}>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "2",
        })}
      >
        <PageTitle title={title} />
        <PageLinks link={link} githubLink={githubLink} />
      </div>
      <div className={css({ w: "full", mx: "auto" })}>
        <Image
          src={image}
          alt={title}
          className={css({ w: "full", shadow: "lg" })}
          width={800}
          height={480}
          priority
        />
      </div>
      <p className={css({})}>{description}</p>
    </div>
  );
}
