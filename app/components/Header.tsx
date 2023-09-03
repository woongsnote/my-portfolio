import Link from "next/link";
import { Navbar } from ".";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-2 bg-[#121212] z-50 px-2 md:px-0 top-0 sticky text-white">
      <Link href="/">LOGO</Link>
      <Navbar />
    </header>
  );
};

export default Header;
