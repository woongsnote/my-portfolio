import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <header className="text-white fixed top-4 inset-x-0 z-10">
      <div className="container flex items-center w-fit mx-auto border border-black/10 shadow-md rounded-lg py-4 bg-primary">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
