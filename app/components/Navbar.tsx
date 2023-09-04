import { SetStateAction } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavbarItem } from "@data";
import NavLink from "./NavLink";

interface NavbarProps {
  links: NavbarItem[];
  isNavbarOpen: boolean;
  setNavbarOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ links, isNavbarOpen, setNavbarOpen }: NavbarProps) => {
  return (
    <nav className="flex justify-between py-4 sm:pr-4">
      <button
        className="md:hidden border rounded-md text-2xl"
        onClick={() => setNavbarOpen(!isNavbarOpen)}
      >
        {isNavbarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <ul className="hidden md:flex flex-row space-x-3">
        {links.map((link) => {
          return (
            <li key={link.title}>
              <NavLink href={link.href} title={link.title} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
