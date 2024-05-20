export const navItems = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "my projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const education = {
  title: "교육",
  items: [
    {
      institution: "팀스파르타",
      degree: "React 웹 개발 교육",
      duration: "2022.08 - 2022.11",
    },
    {
      institution: "한국산업기술대학교",
      degree: "전자공학과",
      duration: "2011.03 - 2017.02",
    },
  ],
};

export const experience = {
  title: "업무 경험",
  items: [
    {
      company: "피노스토리",
      duration: "2020.08 - 2021.07",
      position: "연구원",
    },
    {
      company: "에프티랩",
      duration: "2019.04 - 2019.11",
      position: "App 개발자",
    },
    {
      company: "아이엠티에스",
      duration: "2017.02 - 2017.09",
      position: "H/W 연구원",
    },
  ],
};

const GITHUB_URL = "https://github.com/woongsnote";

export const projects = [
  {
    category: "frontend",
    title: "99Club",
    description: "99Club 스터디를 진행하면서, 학습한 문제들의 모음",
    stack: ["next.js", "typescript", "notion"],
    image: "/assets/projects/99club.png",
    live: "https://99club-coding-study.vercel.app",
    github: `${GITHUB_URL}/99club-coding-study`,
  },
  {
    category: "frontend",
    title: "Woongsnote",
    description: "학습한 지식 및 프로젝트를 공유하기 위한 기술 블로그",
    stack: ["astro", "typescript"],
    image: "/assets/projects/woongsnote.png",
    live: "https://woongsnote.dev",
    github: `${GITHUB_URL}/woongsnote-dev`,
  },
  {
    category: "frontend",
    title: "QR 코드 생성기",
    description: "QR Code 생성 및 생성한 QR Code 이미지 저장",
    stack: ["next.js", "typescript", "qr code"],
    image: "/assets/projects/qr-code.png",
    live: "https://qr-quasar.vercel.app",
    github: `${GITHUB_URL}/qr-quasar`,
  },
  {
    category: "frontend",
    title: "미니픽",
    description: "썸네일을 쉽고 빠르게 구현할 수 있는 사이트",
    stack: ["next.js", "typescript"],
    image: "/assets/projects/mini-pick.png",
    live: "https://mini-pick.vercel.app",
    github: `${GITHUB_URL}/book-book`,
  },
  {
    category: "frontend",
    title: "방구석 평론가",
    description: "영화 정보 검색 및 후기 공유를 위한 커뮤니티",
    stack: ["react", "javascript"],
    image: "/assets/projects/movie-critic.png",
    live: "",
    github: `${GITHUB_URL}/movie-critic-fe`,
  },
  {
    category: "frontend",
    title: "북적북적",
    description: "읽은 책에 관한 후기를 작성하는 서비스",
    stack: ["react", "javascript"],
    image: "/assets/projects/book-book.png",
    live: "",
    github: `${GITHUB_URL}/bookbook-fe`,
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  },
];
