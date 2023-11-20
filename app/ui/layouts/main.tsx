import { css } from "@/styled-system/css";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className={mainLayoutStyle}>{children}</main>;
};

const mainLayoutStyle = css({
  pos: "relative",
  maxW: "5xl",
  mx: "auto",
  px: { base: "4", md: "6", lg: "0" },
});
