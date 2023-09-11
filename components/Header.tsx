"use client";

import Link from "next/link";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import Navbar from "./Navbar";
import { NAV_LINKS } from "@/lib/data";

const Header = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  return (
    <header>
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-4xl py-2 font-bold">
          문지웅
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
