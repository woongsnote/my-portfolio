import { css } from "@/styled-system/css";

export const Experience = () => {
  return (
    <div>
      <h2 className={subTitle}>My Experiences</h2>
      <p></p>
    </div>
  );
};

const subTitle = css({
  fontWeight: "bold",
  fontSize: { base: "lg", xl: "2xl" },
});
