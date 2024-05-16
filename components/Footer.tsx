import Socials from "./Socials";

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer>
      <div className="container h-full py-2 flex border-t border-t-accent items-center justify-between">
        <p className="flex items-center gap-2">
          &copy; {year}.<span className="font-bold text-accent">문지웅</span>{" "}
          All rights reserved.
        </p>
        <Socials
          containerStyles="flex items-center gap-2"
          iconStyles="size-6 flex items-center"
        />
      </div>
    </footer>
  );
};

export default Footer;
