import { css } from "@/styled-system/css";
import { RiCircleFill } from "react-icons/ri";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <h1
      className={css({
        display: "flex",
        fontSize: "xl",
        alignItems: "center",
        gap: "2",
      })}
    >
      <RiCircleFill size={8} /> {title}
    </h1>
  );
};

export default PageTitle;
