import { NAV_LINKS } from "@/lib/data";
import NavLink from "./NavLink";

interface NavbarProps {
  links: typeof NAV_LINKS;
}

const Navbar = ({ links }: NavbarProps) => {
  return (
    <nav className="py-2 px-4 rounded-full border-2 w-fit bg-white dark:bg-black">
      <ul className="flex flex-row gap-4">
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
