import Navbar from "./Navbar";
import { NAV_LINKS } from "@/lib/data";

const Header = () => {
  return (
    <header>
      <Navbar links={NAV_LINKS} />
    </header>
  );
};

export default Header;
