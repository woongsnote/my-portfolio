import { css } from "@/styled-system/css";
import Link from "next/link";

type NavLink = {
  title: string;
  href: string;
};

const links: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about" },
  { title: "Projects", href: "/#projects" },
  { title: "Contact", href: "/#contact" },
];

export const Header = () => {
  return (
    <header className={headerStyle}>
      <nav className={navbarContainerStyle}>
        <ul className={navbarStyle}>
          {links.map(({ title, href }) => {
            return (
              <li key={title}>
                <Link href={href} className={linkStyle}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = css({
  w: "full",
  mx: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 20,
  pos: "fixed",
  top: "2",
});

const navbarContainerStyle = css({
  w: "fit",
  rounded: "full",
  bgColor: { base: "white", _dark: "black" },
  py: "2",
  px: "4",
  border: "4px solid gray",
});

const navbarStyle = css({
  display: "flex",
  gap: { base: "4", lg: "8" },
});

const linkStyle = css({
  fontSize: { base: "lg", lg: "2xl" },
  _hover: { color: "blue.500" },
});
