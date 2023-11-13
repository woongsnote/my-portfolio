import { css } from "@/styled-system/css";

const Footer = () => {
  return (
    <footer className='content-grid'>
      <div
        className={css({
          textAlign: "center",
          bgColor: { base: "white", _dark: "black" },
          px: "2",
          py: "4",
          roundedBottom: "lg",
          mb: "4",
        })}>
        <hr />
        <p className={css({ fontSize: "sm" })}>
          © 2023.
          <span className={css({ fontSize: "md", fontWeight: "bold" })}>
            {" "}
            문지웅{" "}
          </span>
          | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
