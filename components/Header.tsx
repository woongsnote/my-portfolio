"use client";

import { css } from "@/styled-system/css";
import Navbar from "./Navbar";
import ContactLink from "./ContactLink";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className='primary-header content-grid'>
      <div className='primary-header__layout'>
        <Navbar />
        <div
          className={css({ display: "flex", alignItems: "center", gap: "2" })}>
          <ThemeSwitcher />
          <ContactLink />
        </div>
      </div>
    </header>
  );
};

export default Header;
