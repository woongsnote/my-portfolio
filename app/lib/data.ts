export const NavLinks = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export const Projects = [
  {
    id: 0,
    title: "Tech Blog",
    description:
      "A technology blog where I learn and share knowledge related to development, implemented using Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript"],
    image: "/tech-blog.png",
    githubUrl: "https://github.com/woongsnote/woongsnote-dev",
  },
  {
    id: 1,
    title: "Toodos",
    description:
      "This project is an enhanced version of an existing project where we analyzed the code, addressed its shortcomings, and added a recommendation search feature. We performed a migration from JavaScript to TypeScript and utilized the search API along with Axios to display search results using infinite scrolling. To reduce unnecessary API calls, we applied Debounce functionality.",
    tags: ["React", "TypeScript"],
    image: "/toodos.png",
    githubUrl: "https://github.com/woongsnote/pre-onboarding-10th-4-10",
  },

  {
    id: 2,
    title: "Movie Critic",
    description:
      " Movie Critic is a community project that provides movie information and allows users to leave reviews. It features movie search, bookmarking, one-line reviews, posting and commenting on articles, and badge acquisition through challenges. Users can check their activities on My Page, set a representative badge, and also change their nickname.",
    tags: ["React", "JavaScript"],
    image: "/movie-critic.png",
    githubUrl: "https://github.com/woongsnote/movie-critic-fe",
  },

  {
    id: 3,
    title: "Book Book",
    description:
      "This project is about allowing users to search for books they have read and write reviews for those books. The book search feature is implemented using Kakao's Open API, specifically the Book Search API. The state management for user-written reviews is handled using Redux Toolkit.",
    tags: ["React", "JavaScript"],
    image: "/book-book.png",
    githubUrl: "https://github.com/woongsnote/bookbook-fe",
  },
];
