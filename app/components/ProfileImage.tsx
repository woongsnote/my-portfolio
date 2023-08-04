import Image from "next/image";

const ProfileImage = () => {
  return (
    <Image
      src="/profile.png"
      alt={"profile"}
      width={300}
      height={300}
      priority
      className="m-0"
    />
  );
};

export default ProfileImage;
