import { css } from "@/styled-system/css";
import { ProfileImage } from "@/components/profile-image";
import { HeroButtons } from "@/components/hero-buttons";
import { HeroTitle } from "../components/hero-title";

export const HeroSection = () => {
  return (
    <section className={heroSectionStyle} id='home'>
      <ProfileImage />
      <div className={infoStyle}>
        <HeroTitle />
        <p className={descriptionStyle}>
          새로운 기술을 학습하고 적용하는 것을 즐기는 개발자 <b>문지웅</b>
          입니다.
        </p>
        <HeroButtons />
      </div>
    </section>
  );
};

const heroSectionStyle = css({
  display: "flex",
  flexDir: "column",
  gap: "8",
  alignItems: "center",
  py: "20",
  minH: "screen",
  h: "full",
  w: "full",
  justifyContent: "center",
});

const infoStyle = css({
  textAlign: { base: "center", lg: "start" },
  height: "full",
  justifyContent: "center",
});

const descriptionStyle = css({
  fontSize: { base: "base", sm: "lg" },
  mb: "6",
  wordBreak: "keep-all",
});
