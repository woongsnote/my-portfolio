import { css } from "@/styled-system/css";
import { SectionTitle } from "@/components/section-title";
import { SkillList } from "../components/skill-list";
import { Intro } from "../components/intro";
import { Experience } from "../components/experience";

export const AboutSection = () => {
  return (
    <section className={aboutSectionStyle} id="about">
      <SectionTitle title="About Me" />
      <Intro />
      <SkillList />
      <Experience />
    </section>
  );
};

const aboutSectionStyle = css({
  display: "flex",
  gap: "4",
  lg: { gap: "8" },
  alignItems: "center",
  justifyContent: "start",
  py: "20",
  px: "2",
  w: "full",
  minH: "screen",
  h: "full",
  flexDir: "column",
});
