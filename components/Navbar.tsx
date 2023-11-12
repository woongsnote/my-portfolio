import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome2Line, RiUserLine, RiArchiveLine } from "react-icons/ri";
import { css } from "@/styled-system/css";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { title: "Home", icon: <RiHome2Line />, href: "/" },
    { title: "About", icon: <RiUserLine />, href: "/about" },
    { title: "Projects", icon: <RiArchiveLine />, href: "/projects" },
  ];

  const navStyle = css({
    fontSize: "lg",
    display: "flex",
    gap: "2",
    p: "2",
    flexDirection: "row",
    w: "fit",
  });

  const linkStyle = css({
    color: { base: "gray.500", _hover: "blue.500" },
    p: "2",
  });
  const activeLinkStyle = css({
    color: "white",
    backgroundColor: "blue.500",
    borderRadius: "full",
    p: "2",
  });
  return (
    <nav className={navStyle}>
      <ul>
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link
              aria-label={link.title}
              href={link.href}
              className={css({
                display: "flex",
                flexDir: "column",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              <span
                className={`${
                  pathname === link.href ? activeLinkStyle : linkStyle
                }`}
              >
                {link.icon}
              </span>
              <span
                className={css({
                  color: "black",
                  fontSize: "sm",
                  display: { base: "none", sm: "block" },
                })}
              >
                {link.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
