import { Education, Experience, Project } from "@/types";

export const EducationData: Education[] = [
  {
    company: "팀스파르타",
    qualification: "React 웹 개발 교육",
    years: "2022",
  },
  {
    university: "한국산업기술대학교",
    qualification: "전자공학과",
    years: "2011-2017",
  },
];

export const ExperienceData: Experience[] = [
  {
    company: "ABC",
    years: "2020-2021",
    role: "engineer",
  },
  {
    company: "E",
    years: "2019",
    role: "engineer",
  },
  {
    company: "F",
    years: "2017",
    role: "engineer",
  },
];

export const ProjectsData: Project[] = [
  {
    title: "기술 블로그",
    description:
      "개발 관련 학습한 지식을 기록하고, 공유하기 위해 구현한 블로그",
    tech: ["Astro", "TypeScript", "TailwindCSS"],
    image: "/tech-blog.png",
    githubLink: "https://github.com/woongsnote/woongsnote-dev",
    slug: "tech-blog",
    link: "",
    releaseDate: "2023-04-07",
    category: "Next.js",
  },
  {
    title: "미니픽",
    description: "블로그 포스팅에 들어갈 섬네일을 빠르게 생성할 수 있는 서비스",
    tech: ["Next.js", "TypeScript"],
    image: "/mini-pick.png",
    githubLink: "https://github.com/woongsnote/image-generator",
    slug: "mini-pick",
    link: "",
    releaseDate: "2023-08-30",
    category: "Next.js",
  },
  {
    title: "MDX 블로그 템플릿",
    description: "ContentLayer 블로그를 구현할 수 있는 기본 템플릿",
    tech: ["Next.js", "ContentLayer"],
    image: "/mdx-template.png",
    githubLink: "https://github.com/woongsnote/mdx-blog",
    slug: "mdx-blog-template",
    link: "",
    releaseDate: "2023-08-15",
    category: "Next.js",
  },
  {
    title: "방구석 평론가",
    description: "영화 정보를 검색하고, 관람한 영화 및 영화관의 후기를 남길 수 있는 커뮤니티 서비스",
    tech: ["React", "JavaScript"],
    image: "/movie-critic.png",
    githubLink: "https://github.com/woongsnote/movie-critic-fe",
    slug: "movie-critic",
    link: "",
    releaseDate: "2022-10-22",
    category: "React",
  },
  {
    title: "북적북적",
    description: "읽은 책의 후기를 작성할 수 있는 서비스",
    tech: ["React", "JavaScript"],
    image: "/book-book.png",
    githubLink: "https://github.com/woongsnote/bookbook-fe",
    slug: "book-book",
    link: "",
    releaseDate: "2022-09-11",
    category: "React",
  },
];

export const SkillsData = [
  {
    title: "React",
    description:
      "CRA 나 Vite, Next.js 등의 프레임워크를 사용해서 웹사이트 구현 가능.",
  },
  {
    title: "CSS Framework",
    description: "TailwindCSS, Styled Component 등을 사용한 경험 있음.",
  },
];
