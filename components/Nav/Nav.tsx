"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data";
import { FaHome, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const icons = [
  { name: "home", icon: <FaHome /> },
  { name: "my projects", icon: <FaProjectDiagram /> },
  { name: "contact", icon: <FaEnvelope /> },
];
const Nav = () => {
  const pathname = usePathname();
  const navLinks = navItems.map((item) => {
    const iconItem = icons.find((icon) => icon.name === item.name);
    return {
      ...item,
      icon: iconItem ? iconItem.icon : null,
    };
  });

  return (
    <nav className="flex gap-8 animate-slide">
      {navLinks.map(({ name, path, icon }) => (
        <Link
          href={path}
          key={name}
          className={`${
            path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}>
          <span className="hidden md:block">{name}</span>
          <div className="md:hidden">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger
                  asChild
                  className="w-fit rounded-xl flex items-center justify-center">
                  <div className="items-center justify-center hover:text-accent transition-all duration-300">
                    {icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p className="text-lg">{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
