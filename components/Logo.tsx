import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="font-semibold">
        Jiwoong<span className="text-accent">.</span>
      </h1>
    </Link>
  );
};

export default Logo;
