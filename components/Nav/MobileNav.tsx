"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./links";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/Logo";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-accent" size={32} />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary">
        <div className="my-16 text-center text-2xl">
          <Logo />
        </div>
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map(({ name, path }) => (
            <Link
              href={path}
              key={name}
              className={`${
                path === pathname && " text-accent border-b-2 border-accent"
              } w-fit text-xl capitalize font-medium hover:text-accent transition-all`}>
              {name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
