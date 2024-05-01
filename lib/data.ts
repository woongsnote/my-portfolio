import { Education, Experience, Project } from "@/types";

export const EducationData: Education[] = [
  {
    company: "팀스파르타",
    qualification: "React 웹 개발 교육",
    years: "2022.08 - 2022.11",
  },
  {
    university: "한국산업기술대학교",
    qualification: "전자공학과",
    years: "2011.03 - 2017.02",
  },
];

export const ExperienceData: Experience[] = [
  {
    company: "피노스토리",
    years: "2020.08 - 2021.07",
    role: "기업 부설 연구소 / 연구원",
  },
  {
    company: "에프티랩",
    years: "2019.04 - 2019.11",
    role: "기업 부설 연구소 / 연구원",
  },
  {
    company: "아이엠티에스",
    years: "2017.02 - 2017.09",
    role: "기업 부설 연구소 / 연구원",
  },
];

const GITHUB_URL = "https://github.com/woongsnote";

export const ProjectsData: Project[] = [
  {
    title: "기술 블로그",
    description:
      "개발 관련 학습한 지식을 기록하고, 공유하기 위해 구현한 기술 블로그",
    tag: ["Astro", "Next.js", "TypeScript"],
    image: "/tech-blog.png",
    githubRepo: `${GITHUB_URL}/woongsnote-dev`,
    category: "Astro",
    isTeam: false,
  },
  {
    title: "QR Quasar",
    description: "Text를 입력해서, QR Code를 생성하고 저장할 수 있는 서비스",
    tag: ["Next.js", "TypeScript"],
    image: "/qr-code.png",
    githubRepo: `${GITHUB_URL}/qr-quasar`,
    category: "Next.js",
    isTeam: false,
  },
  {
    title: "미니픽",
    description: "블로그 포스팅에 들어갈 섬네일을 빠르게 생성할 수 있는 서비스",
    tag: ["Next.js", "TypeScript"],
    image: "/mini-pick.png",
    githubRepo: `${GITHUB_URL}/image-generator`,
    category: "Next.js",
    isTeam: false,
  },

  {
    title: "MDX 블로그 템플릿",
    description: "ContentLayer 블로그를 구현할 수 있는 기본 템플릿",
    tag: ["Next.js", "ContentLayer"],
    image: "/mdx-template.png",
    githubRepo: `${GITHUB_URL}/contentlayer-blog-template`,
    category: "Next.js",
    isTeam: false,
  },
  {
    title: "방구석 평론가",
    description:
      "영화 정보 검색 및 관람한 영화, 영화관 후기를 작성할 수 있는 커뮤니티 서비스",
    tag: ["React", "JavaScript"],
    image: "/movie-critic.png",
    githubRepo: `${GITHUB_URL}/movie-critic-fe`,
    category: "React",
    isTeam: true,
    members: "FE: 4, BE: 3",
  },
  {
    title: "북적북적",
    description: "읽은 책에 관한 후기를 작성할 수 있는 서비스",
    tag: ["React", "JavaScript"],
    image: "/book-book.png",
    githubRepo: `${GITHUB_URL}/bookbook-fe`,
    category: "React",
    isTeam: true,
    members: "FE: 2, BE: 2",
  },
];

export const SkillsData = [
  {
    title: "React",
    description:
      "CRA 나 Vite, Next.js 등의 프레임워크를 사용해서 웹사이트를 구현할 수 있습니다.",
  },
  {
    title: "CSS Framework",
    description: "TailwindCSS, Styled Component 등을 사용할 수 있습니다.",
  },
];
