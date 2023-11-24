import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/logo.png";

const Logo = () => {
  return (
    <div className="w-12 h-12">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width={48}
          height={48}
          priority
          className="shadow-xl rounded-full w-full h-full"
        />
      </Link>
    </div>
  );
};

export default Logo;
