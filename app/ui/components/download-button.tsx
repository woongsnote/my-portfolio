import { css } from "@/styled-system/css";
import { RiDownloadLine } from "react-icons/ri";

export const DownloadButton = () => {
  return (
    <a href="/CV.pdf" download className={downloadButtonStyle}>
      <span>Download CV</span>
      <RiDownloadLine />
    </a>
  );
};

const downloadButtonStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2",
  bgColor: { base: "purple.500", _dark: "purple.800" },
  px: "4",
  py: "2",
  color: "white",
  rounded: "full",
  _hover: { bgColor: { base: "pink.500", _dark: "purple.600" } },
  w: { base: "full", lg: "fit" },
  shadow: "lg",
});
