"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItem {
  title: string;
  href: string;
}

const navLinks: NavbarItem[] = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between py-4 sm:pr-4">
      <ul className="flex flex-row space-x-3">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li
              key={link.title}
              className={isActive ? "text-blue-500 font-bold" : "text-white"}
            >
              <Link href={link.href} className="text-lg">
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
