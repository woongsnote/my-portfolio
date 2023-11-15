import { css } from "@/styled-system/css";

const Footer = () => {
  return (
    <footer className='content-grid'>
      <div
        className={css({
          textAlign: "center",
          bgColor: { base: "white", _dark: "#212121" },
          px: "2",
          py: "4",
          roundedBottom: "lg",
          mb: "4",
        })}>
        <p
          className={css({
            fontSize: "sm",
            mt: "4",
            pt: "2",
          })}>
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
