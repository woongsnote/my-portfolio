const GITHUB_URL = "https://github.com/woongsnote";

const projects = {
  title: "",
  description: "",
  items: [
    {
      title: "99Club Study",
      description:
        "개발 관련 학습한 지식을 기록하고, 공유하기 위해 구현한 기술 블로그",
      tag: ["Astro", "Next.js", "TypeScript"],
      image: "/tech-blog.png",
      githubRepo: `${GITHUB_URL}/woongsnote-dev`,
      isTeam: false,
    },
    {
      title: "기술 블로그",
      description:
        "개발 관련 학습한 지식을 기록하고, 공유하기 위해 구현한 기술 블로그",
      tag: ["Astro", "Next.js", "TypeScript"],
      image: "/tech-blog.png",
      githubRepo: `${GITHUB_URL}/woongsnote-dev`,

      isTeam: false,
    },
    {
      title: "QR Quasar",
      description: "Text를 입력해서, QR Code를 생성하고 저장할 수 있는 서비스",
      tag: ["Next.js", "TypeScript"],
      image: "/qr-code.png",
      githubRepo: `${GITHUB_URL}/qr-quasar`,

      isTeam: false,
    },
    {
      title: "미니픽",
      description:
        "블로그 포스팅에 들어갈 섬네일을 빠르게 생성할 수 있는 서비스",
      tag: ["Next.js", "TypeScript"],
      image: "/mini-pick.png",
      githubRepo: `${GITHUB_URL}/image-generator`,
      isTeam: false,
    },

    {
      title: "MDX 블로그 템플릿",
      description: "ContentLayer 블로그를 구현할 수 있는 기본 템플릿",
      tag: ["Next.js", "ContentLayer"],
      image: "/mdx-template.png",
      githubRepo: `${GITHUB_URL}/contentlayer-blog-template`,
      isTeam: false,
    },
    {
      title: "방구석 평론가",
      description:
        "영화 정보 검색 및 관람한 영화, 영화관 후기를 작성할 수 있는 커뮤니티 서비스",
      tag: ["React", "JavaScript"],
      image: "/movie-critic.png",
      githubRepo: `${GITHUB_URL}/movie-critic-fe`,
      isTeam: true,
      members: "FE: 4, BE: 3",
    },
    {
      title: "북적북적",
      description: "읽은 책에 관한 후기를 작성할 수 있는 서비스",
      tag: ["React", "JavaScript"],
      image: "/book-book.png",
      githubRepo: `${GITHUB_URL}/bookbook-fe`,
      isTeam: true,
      members: "FE: 2, BE: 2",
    },
  ],
};
const Projects = () => {
  return <div>page</div>;
};

export default Projects;
