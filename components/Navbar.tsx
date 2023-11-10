import { NAV_LINKS } from "@/lib/data";
import NavLink from "./NavLink";

interface NavbarProps {
  links: typeof NAV_LINKS;
}

const Navbar = ({ links }: NavbarProps) => {
  return (
    <nav className='rounded-full shadow-md w-full max-w-screen-sm mb-2 bg-white dark:bg-black mx-auto'>
      <ul className='flex gap-4 py-4'>
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
