import { NavbarItem } from "@data";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }: { links: NavbarItem[] }) => {
  return (
    <ul className="flex flex-col py-4 items-center z-50">
      {links.map((link) => (
        <li key={link.title}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
