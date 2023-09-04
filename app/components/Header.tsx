"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@data";
import MenuOverlay from "./MenuOverlay";
import Navbar from "./Navbar";

const Header = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <header className="z-20 px-4 top-0 fixed border-b text-white container mx-auto bg-black">
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-5xl">
          LOGO
        </Link>
        <Navbar
          links={NAV_LINKS}
          isNavbarOpen={isNavbarOpen}
          setNavbarOpen={setNavbarOpen}
        />
      </div>
      {isNavbarOpen ? <MenuOverlay links={NAV_LINKS} /> : null}
    </header>
  );
};

export default Header;
