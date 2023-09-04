import { NAV_LINKS } from "@/lib/data";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }: { links: typeof NAV_LINKS }) => {
  return (
    <ul className="flex flex-col py-4 gap-3 items-center z-50">
      {links.map((link) => (
        <li key={link.title}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
