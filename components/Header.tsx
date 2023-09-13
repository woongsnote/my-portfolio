import Link from "next/link";
import Navbar from "./Navbar";
import { NAV_LINKS } from "@/lib/data";

const Header = () => {
  return (
    <header>
      <div className="flex justify-center mx-auto py-2 items-center">
        <Navbar
          links={NAV_LINKS}
        />
      </div>
    </header>
  );
};

export default Header;
