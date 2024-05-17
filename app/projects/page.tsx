import ProjectList from "@/components/Projects/ProjectList";
import { Project } from "@/types";

const GITHUB_URL = "https://github.com/woongsnote";

const projects: Project[] = [
  {
    num: "01",
    category: "frontend",
    title: "Woongsnote",
    description:
      "개발 관련 학습한 지식 및 프로젝트를 공유하기 위한 기술 블로그",
    stack: [{ name: "Astro" }, { name: "Typescript" }, { name: "Tailwindcss" }],
    image: "/assets/projects/woongsnote.png",
    live: "https://woongsnote.dev",
    github: `${GITHUB_URL}/woongsnote-dev`,
  },
  {
    num: "02",
    category: "frontend",
    title: "",
    description: "",
    stack: [],
    image: "",
    live: "",
    github:  `${GITHUB_URL}/woongsnote-dev`,
  },
  {
    num: "03",
    category: "frontend",
    title: "방구석 평론가",
    description: "영화 정보 검색 및 후기 공유를 위한 커뮤니티 서비스",
    stack: [{ name: "react" }, { name: "javascript" }],
    image: "/assets/projects/movie-critic.png",
    live: "",
    github:  `${GITHUB_URL}/movie-critic-fe`,
  },
  {
    num: "04",
    category: "",
    title: "",
    description: "",
    stack: [],
    image: "",
    live: "",
    github:  `${GITHUB_URL}/book-book`,
  },
];

const MyProjects = () => {
  return <ProjectList projects={projects} />;
};

export default MyProjects;
