import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="flex items-center justify-center mx-auto p-4 border-4 border-double rounded-full w-32 h-32">
      <Image
        src={"/profile.png"}
        alt="profile"
        width={100}
        height={100}
        priority
        className="w-auto h-auto self-center"
      />
    </div>
  );
};

export default ProfileImage;
