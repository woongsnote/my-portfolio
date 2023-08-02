import Link from "next/link";

const NavLinks = [
  { title: "About Me", href: "/about" },
  { title: "Projects", href: "/projects" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4">
      <h1 className="font-bold text-3xl text-white">
        <Link href={"/"}>문지웅(Woongsnote)</Link> 
      </h1>
      <ul className="flex flex-row space-x-3">
        {NavLinks.map((link) => (
          <li key={link.title} className="">
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
