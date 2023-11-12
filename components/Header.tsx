"use client";

import Navbar from "./Navbar";
import ContactLink from "./ContactLink";
import ThemeSwitcher from "./ThemeSwitcher";
import { css } from "@/styled-system/css";

const Header = () => {
  return (
    <header className="primary-header content-grid">
      <div className="primary-header__layout breakout">
        <Navbar />
        <div
          className={css({ display: "flex", alignItems: "center", gap: "2" })}
        >
          <ThemeSwitcher />
          <ContactLink />
        </div>
      </div>
    </header>
  );
};

export default Header;
