import { Logo, Navbar } from "../navbar";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-2 bg-white z-50 px-2 md:px-0 top-0 sticky">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
