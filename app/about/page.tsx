"use client";
import { motion } from "framer-motion";
import { css } from "@/styled-system/css";
import PageTitle from "@/components/PageTitle";

export default function About() {
  const techStack: string[] = ["React", "JavaScript", "Next.js", "TypeScript"];

  const techStyle = css({
    rounded: "md",
    bgColor: { base: "gray.300", _dark: "gray.600" },
    color: { base: "black", _dark: "#eee" },
    px: "2",
    py: "1",
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}>
      <div className={css({ display: "flex", flexDir: "column" })}>
        <PageTitle title='About' />
        <h2 className={css({ fontSize: "2xl", my: "2" })}>
          안녕하세요, 문지웅입니다.
        </h2>
        <p className=''>
          <span className={css({ fontWeight: "bold" })}>
            새로운 기술에 대한 호기심과 끊임없는 열정을 가지고 있습니다.
          </span>
          <br />
          학습한 지식을 직접 구현한{" "}
          <a
            href='https://woongsnote.dev'
            target='_blank'
            className={css({ fontWeight: "bold" })}>
            블로그
          </a>
          에 정리하고 공유함으로써 지식 공유에도 기여하고 있습니다.
          <br />
          <br />
          <span className={css({ fontWeight: "bold" })}>
            소통과 협업도 중요시합니다.
          </span>
          <br />
          다양한 프로젝트 경험을 통해 프론트엔드와 백엔드 개발자들과의 원활한
          협업 방법과 개발 프로세스를 익혀왔습니다. 팀 내에서 효과적인
          커뮤니케이션과 역할 분담을 통해 일정 관리와 목표 달성을 위한 체계적인
          계획 수립 능력을 갖추고 있습니다. 이러한 노력으로 프로젝트의 완성도가
          높은 팀으로 평가받은 경험이 있습니다.
        </p>
      </div>

      <div className={css({ mt: "4" })}>
        <h2 className={css({ fontSize: "2xl", my: "2" })}>My Skills</h2>
        <p className={css({ display: "flex", gap: "2" })}>
          {techStack.map((tech) => (
            <span className={techStyle} key={tech}>
              {tech}
            </span>
          ))}
        </p>
      </div>

      <div className={css({ mt: "4" })}>
        <h2 className={css({ fontSize: "2xl", my: "2" })}>My Education</h2>{" "}
        <ul className={css({ listStyle: "disc", pl: "8" })}>
          <li>React 웹 개발 교육 과정 (수료) | 2022. 08. - 2022. 11. </li>
          <li>정보처리기사 | 2021.06 </li>
        </ul>
      </div>
    </motion.div>
  );
}
