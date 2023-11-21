import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="w-full">
        <div>
          <div>
            <Logo />
            <Nav containerStyle="flex flex-col items-center gap-y-6 mb-4" linkStyle="text-2xl" underlineStyle={""} />
            <Socials />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
