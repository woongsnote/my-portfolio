import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <h1 className="font-bold text-2xl md:text-3xl px-2">
      <Link href={"/"}>문지웅</Link>
    </h1>
  );
};

export default Logo;
