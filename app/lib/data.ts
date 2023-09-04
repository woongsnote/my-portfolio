export interface NavbarItem {
  title: string;
  href: string;
}

export const NAV_LINKS: NavbarItem[] = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  category: string[];
  releaseDate: string;
}

export const PROJECTS: ProjectProps[] = [
  {
    id: 0,
    title: "북적북적",
    description: "읽은 책의 후기를 남길 수 있는 서비스",
    tags: ["React", "JavaScript"],
    image: "/book-book.png",
    githubUrl: "https://github.com/woongsnote/bookbook-fe",
    category: ["All", "Web"],
    releaseDate: "2022-09-11",
  },
  {
    id: 1,
    title: "방구석 평론가",
    description: "영화에 관한 검색 및 후기를 남길 수 있는 커뮤니티",
    tags: ["React", "JavaScript"],
    image: "/movie-critic.png",
    githubUrl: "https://github.com/woongsnote/movie-critic-fe",
    category: ["All", "Web"],
    releaseDate: "2022-09-12",
  },
  {
    id: 2,
    title: "Toodos",
    description: "추천 검색어 기능 추가 및 코드 개선 과제",
    tags: ["React", "TypeScript"],
    image: "/toodos.png",
    githubUrl: "https://github.com/woongsnote/pre-onboarding-10th-4-10",
    category: ["All", "Web"],
    releaseDate: "2022-09-13",
  },
  {
    id: 3,
    title: "기술 블로그",
    description: "개발 관련 학습한 지식을 기록하고, 공유하는 블로그",
    tags: ["Next.js", "TypeScript"],
    image: "/tech-blog.png",
    githubUrl: "https://github.com/woongsnote/woongsnote-dev",
    category: ["All", "Web"],
    releaseDate: "2022-09-14",
  },
  {
    id: 4,
    title: "MDX Blog Template",
    description: "ContentLayer 블로그 구현을 위한 템플릿",
    tags: ["Next.js", "ContentLayer"],
    image: "/tech-blog.png",
    githubUrl: "https://github.com/woongsnote/woongsnote-dev",
    category: ["All", "Web"],
    releaseDate: "2022-09-15",
  },
  {
    id: 5,
    title: "Mini Pick",
    description: "블로그 포스팅에 유용한 섬네일 생성기",
    tags: ["Next.js", "TypeScript"],
    image: "/tech-blog.png",
    githubUrl: "https://github.com/woongsnote/image-generator",
    category: ["All", "Web"],
    releaseDate: "2023-08-30",
  },
];
