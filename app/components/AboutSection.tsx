"use client";

import { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import SectionTitle from "./SectionTitle";

interface TabItem {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabItem[] = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>이노베이션캠프 in 서울, React 웹 개발 교육 (수료)</li>
        <li>한국산업기술대학교, 전자공학과 (졸업)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>정보처리기사</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");

  const handleToChange = (id: string) => {
    setTab(id);
  };
  
  return (
    <section
      className="md:grid md:grid-cols-2 gap-8 items-center py-20"
      id="about"
    >
      <div className="">
        <Image
          src={"/about-image.jpg"}
          alt="About Image"
          width={500}
          height={500}
          className="w-auto h-auto"
        />
      </div>
      <div>
        <SectionTitle title={"About Me"} />
        <p className="text-base lg:text-lg">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience working
          with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
          Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and I
          am excited to work with others to create amazing applications.
        </p>
        <div className="flex flex-row justify-start mt-8">
          <TabButton
            selectTab={() => handleToChange("skills")}
            isActive={tab === "skills"}
            title="Skills"
          />
          <TabButton
            selectTab={() => handleToChange("education")}
            isActive={tab === "education"}
            title="Education"
          />
          <TabButton
            selectTab={() => handleToChange("certifications")}
            isActive={tab === "certifications"}
            title="Certifications"
          />
        </div>
        <div className="mt-4 h-24">
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
