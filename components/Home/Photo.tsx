import Image from "next/image";
import profile from "@/public/assets/profile.png";

const Photo = () => {
  return (
    <div className="relative md:flex w-full max-w-48 overflow-hidden rounded-full p-4 mx-auto dark:border-secondary lg:mx-0 lg:max-w-sm">
      <Image
        src={profile}
        alt="profile"
        width={300}
        height={300}
        priority
        className="size-full"
      />
    </div>
  );
};

export default Photo;
