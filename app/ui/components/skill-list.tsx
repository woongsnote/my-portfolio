import { css } from "@/styled-system/css";

const skills: string[] = [
  "React로 구현한 프로젝트를 기획부터 운영까지 해 본 경험이 있습니다.",
  "Next.js 프레임워크를 사용해서 프로젝트를 구현한 경험이 있습니다.",
];
export const SkillList = () => {
  return (
    <>
      <h2 className={subTitle}>My Skills</h2>

      <ul className={skillListStyle}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

const skillListStyle = css({
  w: "fit",
  display: "flex",
  flexDir: "column",
  textAlign: "start",
  justifyContent: "center",
  mx: "auto",
  gap: "3",
  listStyleType: "disc",
});

const subTitle = css({
  fontWeight: "bold",
  fontSize: { base: "lg", xl: "2xl" },
});
