import { css } from "@/styled-system/css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const mainStyle = css({
    bg: { base: "white", _dark: "#212121" },
    roundedTop: "lg",
    p: "4",
    shadow: "lg",
  });

  return <div className={mainStyle}>{children}</div>;
};

export default MainLayout;
