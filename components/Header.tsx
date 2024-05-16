import Link from "next/link";
import Nav from "./Nav/Nav";
import { Button } from "./ui/button";
import MobileNav from "./Nav/MobileNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container flex justify-between items-center">
        <div className="text-4xl">
          <Logo />
        </div>
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
