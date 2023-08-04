"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLinks = [
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between py-4 px-2">
      <ul className="flex flex-row space-x-3">
        {NavLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={link.title}
              className={isActive ? "text-blue-500 font-bold" : "text-black"}
            >
              <Link href={link.href} className="text-lg">{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
