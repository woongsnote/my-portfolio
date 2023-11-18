import { css } from "@/styled-system/css";
import React from "react";

export const SkillCard = () => {
  return <div className={skillCardStyle}>SkillCard</div>;
};

const skillCardStyle = css({
  w: { base: "full.", lg: "1/3" },
  display: "flex",
  flexDir: "column",
  border: "3px solid #eee",
  rounded: "md",
  p: "2",
});
