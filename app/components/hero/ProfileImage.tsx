import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <Image
        src="/profile.png"
        alt={"profile"}
        width={400}
        height={400}
        priority
        className="m-0 w-auto h-auto rounded-full border-2 p-2"
      />
    </div>
  );
};

export default ProfileImage;
