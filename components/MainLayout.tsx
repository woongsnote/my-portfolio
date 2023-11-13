import { css } from "@/styled-system/css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const mainStyle = css({
    bg: { base: "white", _dark: "black" },
    roundedTop: "lg",
    p: "4",
    boxShadow: "md",
  });

  return <div className={`${mainStyle}`}>{children}</div>;
};

export default MainLayout;
