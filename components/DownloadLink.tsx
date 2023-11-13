import { css } from "@/styled-system/css";
import { RiDownloadLine } from "react-icons/ri";

const DownloadLink = () => {
  return (
    <a
      href='/CV.pdf'
      download
      className={css({
        border: "1px solid gray",
        px: "2",
        rounded: "lg",
        fontSize: { base: "sm", md: "md" },
        display: "flex",
        alignItems: "center",
        gap: "2",
        _hover: {
          bgColor: "gray.500",
          color: "white",
          borderColor: "gray.500",
        },
      })}>
      Download CV <RiDownloadLine />
    </a>
  );
};

export default DownloadLink;
