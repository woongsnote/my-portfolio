import Image from "next/image";
import profile from "@/app/assets/profile.png";
const ProfileImage = () => {
  return (
    <div className="hidden relative md:flex w-full max-w-xs overflow-hidden rounded-full p-4 mx-auto my-4 dark:border-secondary lg:mx-0 bg-accent">
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
