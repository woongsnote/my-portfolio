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

export const Projects: Project[] = [
  {
    title: "Tech Blog",
    description:
      "개발 관련 학습한 지식을 기록하고, 공유하기 위해 구현한 블로그입니다. 초기에는 Next.js와 Contentlayer를 기반으로 구현했으나, 현재는 Astro 기반으로 운영 중입니다.",
    tech: ["Astro", "TypeScript", "TailwindCSS"],
    image: "/tech-blog.png",
    githubLink: "https://github.com/woongsnote/woongsnote-dev",
    slug: "tech-blog",
    link: "",
    releaseDate: "2023-04-07",
    category: "Personal",
  },
  {
    title: "Mini Pick",
    description: "블로그 포스팅에 유용한 섬네일 생성기",
    tech: ["Next.js", "TypeScript"],
    image: "/mini-pick.png",
    githubLink: "https://github.com/woongsnote/image-generator",
    slug: "mini-pick",
    link: "",
    releaseDate: "2023-08-30",
    category: "Personal",
  },
  {
    title: "MDX Blog Template",
    description: "ContentLayer 블로그 구현을 위한 템플릿",
    tech: ["Next.js", "ContentLayer"],
    image: "/mdx-template.png",
    githubLink: "https://github.com/woongsnote/mdx-blog",
    slug: "mdx-blog-template",
    link: "",
    releaseDate: "2023-08-15",
    category: "Personal",
  },
  {
    title: "Toodos",
    description: "추천 검색어 기능 추가 및 코드 개선 과제",
    tech: ["React", "TypeScript"],
    image: "/toodos.png",
    githubLink: "https://github.com/woongsnote/pre-onboarding-10th-4-10",
    slug: "toodos",
    link: "",
    releaseDate: "2023-05-23",
    category: "Team",
  },
  {
    title: "Movie Critic",
    description: "영화에 관한 검색 및 후기를 남길 수 있는 커뮤니티",
    tech: ["React", "JavaScript"],
    image: "/movie-critic.png",
    githubLink: "https://github.com/woongsnote/movie-critic-fe",
    slug: "movie-critic",
    link: "",
    releaseDate: "2022-10-22",
    category: "Team",
  },
  {
    title: "Book Book",
    description: "읽은 책의 후기를 남길 수 있는 서비스",
    tech: ["React", "JavaScript"],
    image: "/book-book.png",
    githubLink: "https://github.com/woongsnote/bookbook-fe",
    slug: "book-book",
    link: "",
    releaseDate: "2022-09-11",
    category: "Team",
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
