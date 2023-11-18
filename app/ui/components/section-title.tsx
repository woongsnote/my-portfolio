import { css } from "@/styled-system/css";

export const SectionTitle = ({ title }: { title: string }) => {
  if (title === "") return;

  return (
    <h2
      className={css({
        fontSize: "3xl",
        textAlign: "center",
        fontWeight: "black",
      })}
    >
      {title}
    </h2>
  );
};
