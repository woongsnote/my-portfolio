import Image from "next/image";
import ProfileImg from "../public/profile.png";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <div className="flex items-center justify-center space-x-4 text-xl md:pt-10">
      <div className="w-1/3 space-y-4">
        <p>hello</p>
        <h1 className="text-4xl">I&apos;m Ji Woong Moon</h1>
        <p>A Front-End Developer</p>
        <SocialLinks />
      </div>
      <Image
        src={ProfileImg}
        alt={"profile"}
        width={300}
        height={300}
        priority
      />
    </div>
  );
}
