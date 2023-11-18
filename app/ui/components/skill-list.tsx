import { css } from "@/styled-system/css";
import { SkillCard } from "./skill-card";

const skills = [
  { title: "", description: "" },
  { title: "", description: "" },
  { title: "", description: "" },
];
export const SkillList = () => {
  return (
    <div className={skillListStyle}>
      {skills.map((skill) => (
        <SkillCard key={skill.title} />
      ))}
    </div>
  );
};

const skillListStyle = css({
  w: "full",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mx: "auto",
  gap: "3",
});
