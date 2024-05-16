import Socials from "./Socials";

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="border-t border-accent">
      <div className="container py-2 flex items-center flex-col lg:flex-row justify-between gap-2">
        <p className="flex items-center gap-2">
          &copy; {year}.<span className="font-bold text-accent">문지웅</span>{" "}
          All rights reserved.
        </p>
        <Socials
          containerStyles="flex items-center gap-2"
          iconStyles="size-6 flex items-center hover:text-accent hover:scale-110"
        />
      </div>
    </footer>
  );
};

export default Footer;
