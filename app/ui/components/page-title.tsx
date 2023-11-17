import { css } from "@/styled-system/css";

type PageTitleProps = { title: string };

export const PageTitle = ({ title }: PageTitleProps) => {
  if (title === "") return;

  return (
    <h2
      className={css({
        fontSize: "3xl",
        textAlign: "center",
      })}
    >
      {title}
    </h2>
  );
};
