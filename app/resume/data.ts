import { Education, Experience } from "@/types";

export const about = {
  title: "About Me",
  description: "Lorem",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jiwoong Moon",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+82) 010 4032 0007",
    },
    {
      fieldName: "Experiences",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "woongsnote@gmail.com",
    },
  ],
};

export const experience: Experience = {
  title: "My experiences",
  description: "All of my work Experience",
  items: [
    {
      company: "피노스토리",
      duration: "2020.08 - 2021.07",
      position: "연구원",
    },
    {
      company: "에프티랩",
      duration: "2019.04 - 2019.11",
      position: "연구원",
    },
    {
      company: "아이엠티에스",
      duration: "2017.02 - 2017.09",
      position: "연구원",
    },
  ],
};

export const education: Education = {
  title: "My Educations",
  description: "Lorem",
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

export const skills = {
  title: "My Skills",
  description: "",
  items: [
    {
      title: "React",
      description:
        "CRA 나 Vite, Next.js 등의 프레임워크를 사용해서 웹사이트를 구현할 수 있습니다.",
    },
    {
      title: "CSS Framework",
      description: "TailwindCSS, Styled Component 등을 사용할 수 있습니다.",
    },
  ],
};
