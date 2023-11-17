import { css } from "@/styled-system/css";
import { TypeAnimation } from "react-type-animation";

export const HeroTitle = () => {
  return (
    <h1 className={titleStyle}>
      <span className={accentStyle}>
        Hello, I&apos;m{" "}
      </span>
      <br />
      <TypeAnimation
        sequence={[
          "Moon Jiwoong",
          1000,
          "Web Developer",
          1000,
          "Front-End Developer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </h1>
  );
};

const titleStyle = css({
  mb: "4",
  fontSize: { base: "3xl", lg: "5xl" },
  fontWeight: "extrabold",
  textAlign: { base: "center", lg: "start" },
});

//text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600
const accentStyle = css({
  color: "transparent",
  backgroundClip: "text",
  bgGradient: "to-r",
  gradientFrom: "blue.400",
  gradientTo: "purple.600",
});
