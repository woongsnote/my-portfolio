"use client";
import { motion } from "framer-motion";
import { css } from "@/styled-system/css";
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}>
      <div className={css({ display: "flex", flexDir: "column" })}>
        <h2>About Me</h2>
        <p className=''>
          <span className={css({ fontWeight: "bold" })}>
            새로운 기술에 대한 호기심과 끊임없는 열정을 가지고 있습니다.{" "}
          </span>
          학습한 지식을 직접 구현한{" "}
          <a
            href='https://woongsnote.dev'
            target='_blank'
            className={css({ fontWeight: "bold" })}>
            블로그
          </a>
          에 정리하고 공유함으로써 지식 공유에도 기여하고 있습니다.
          <br />
          <span>소통과 협업도 중요시합니다. </span>
          다양한 프로젝트 경험을 통해 프론트엔드와 백엔드 개발자들과의 원활한
          협업 방법과 개발 프로세스를 익혀왔습니다. 팀 내에서 효과적인
          커뮤니케이션과 역할 분담을 통해 일정 관리와 목표 달성을 위한 체계적인
          계획 수립 능력을 갖추고 있습니다. 이러한 노력으로 프로젝트의 완성도가
          높은 팀으로 평가받은 경험이 있습니다.
        </p>
      </div>

      <div>My Skills</div>
      <div>My Experiences</div>
    </motion.div>
  );
}
