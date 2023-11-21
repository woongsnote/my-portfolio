import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className='w-full sticky top-0 z-20 bg-white dark:bg-accent'>
      <div className='container mx-auto py-2'>
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            <Nav
              containerStyle='hidden xl:flex gap-x-8 items-center'
              linkStyle='relative hover:text-primary transition-all'
              underlineStyle='underline decoration-primary underline-offset-8 decoration-4'
            />
            <DarkModeToggle />
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
