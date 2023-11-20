import { css } from "@/styled-system/css";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

export const ContactButton = () => {
  return (
    <Link href="#contact" className={contactButtonStyle}>
      Contact Me <RiArrowRightLine />
    </Link>
  );
};

const contactButtonStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2",
  bgColor: "blue.500",
  px: "4",
  py: "2",
  color: "white",
  rounded: "full",
  w: { base: "full", lg: "fit" },
  shadow: "lg",
});
