"use client";

import { motion } from "framer-motion";
import { css } from "@/styled-system/css";
import { ProfileImage } from "@/components/profile-image";
import { HeroButtons } from "@/components/hero-buttons";
import { HeroTitle } from "../components/hero-title";
import { RiArrowDownCircleFill } from "react-icons/ri";

export const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={heroSectionStyle}
      id="home"
    >
      <ProfileImage />
      <div className={infoStyle}>
        <HeroTitle />
        <p className={descriptionStyle}>
          새로운 기술을 학습하는 것을 즐기는 개발자{" "}
          <span className={css({ fontWeight: "bold" })}>문지웅</span>입니다.
        </p>
        <HeroButtons />
        <div
          className={css({
            display: "flex",
            w: "full",
            bgColor: "green.300",
            alignItems: "center",
            justifyContent: "center",
            mt: "12",
          })}
        >
          <RiArrowDownCircleFill size={64} />
        </div>
      </div>
    </motion.section>
  );
};

const heroSectionStyle = css({
  display: "flex",
  flexDir: "column",
  gap: "8",
  alignItems: "center",
  py: { lg: "10" },
  minH: "screen",
  height: "full",
  w: "full",
  bgColor: "gray.100",
});

const infoStyle = css({
  textAlign: "center",
  height: "full",
  justifyContent: "center",
});

const descriptionStyle = css({
  fontSize: { base: "base", sm: "lg", lg: "3xl" },
  mb: "6",
});
