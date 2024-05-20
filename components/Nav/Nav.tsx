"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data";
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8 animate-slide">
      {navItems.map(({ name, path }) => (
        <Link
          href={path}
          key={name}
          className={`${
            path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}>
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
