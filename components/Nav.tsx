"use client";

import { NavLink } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type NavProps = {
  containerStyle: string;
  linkStyle: string;
  underlineStyle: string;
};

const links: NavLink[] = [
  { title: "home", href: "/" },
  { title: "my projects", href: "/projects" },
  { title: "contact", href: "/contact" },
];

const Nav = ({ containerStyle, linkStyle, underlineStyle }: NavProps) => {
  const path = usePathname();
  console.log(path);

  return (
    <nav className={`${containerStyle}`}>
      {links.map(({ title, href }) => {
        return (
          <Link href={href} key={title} className={`capitalize ${linkStyle}`}>
            <span className={href === path ? `${underlineStyle}` : ""}>
              {title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
