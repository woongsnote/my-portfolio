"use client";

import Image from "next/image";
import profile from "@/app/assets/profile.png";
import { css } from "@/styled-system/css";
import { motion } from "framer-motion";

export const ProfileImage = () => {
  return (
    <motion.div
      className={profileContainerStyle}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Image
        src={profile}
        alt="profile"
        width={100}
        height={100}
        priority
        className={imageStyle}
      />
    </motion.div>
  );
};

const profileContainerStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mx: "auto",
  p: "4",
  rounded: "full",
  w: { base: "32", lg: "48" },
  h: { base: "32", lg: "48" },
  border: "4px solid #e5e7eb",
});

const imageStyle = css({
  w: "auto",
  h: "auto",
  alignSelf: "center",
});
