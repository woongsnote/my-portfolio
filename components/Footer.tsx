const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-between gap-4 bg-background p-2 md:pb-2">
      <p className="w-fit text-center text-sm text-zinc-500 dark:text-zinc-400">
        &copy; {year}. <span className="text-accent">문지웅</span> All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
