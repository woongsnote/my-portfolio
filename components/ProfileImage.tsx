import Image from "next/image";
import profile from "@/app/assets/profile.png";
const ProfileImage = () => {
  return (
    <div className="hidden relative md:flex w-48 xl:w-96 h-48 xl:h-96 overflow-hidden rounded-full p-4 mx-auto my-4 dark:border-secondary lg:mx-0 bg-accent">
      <Image
        src={profile}
        alt="profile"
        width={300}
        height={300}
        priority
        className="w-full h-full"
      />
    </div>
  );
};

export default ProfileImage;
