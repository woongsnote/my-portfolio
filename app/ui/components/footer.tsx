import { css } from "@/styled-system/css";

export const Footer = () => {
  return (
    <footer className={footerStyle}>
      <p>
        © 2023.
        <span className={accentStyle}> 문지웅 </span>| All rights reserved.
      </p>
    </footer>
  );
};

const footerStyle = css({
  display: "flex",
  w: "full",
  h: "2",
  alignItems: "center",
  justifyContent: "center",
  my: "6",
});

const accentStyle = css({
  fontSize: "md",
  fontWeight: "bold",
});
