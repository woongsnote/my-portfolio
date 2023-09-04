import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link href={href} className="text-lg">
      {title}
    </Link>
  );
};

export default NavLink;
