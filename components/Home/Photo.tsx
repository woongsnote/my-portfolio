import Image from "next/image";
const Photo = () => {
  return (
    <Image
      src={"/assets/profile.png"}
      alt="profile"
      priority
      width={100}
      height={100}
      className="size-full object-center object-cover "
    />
  );
};

export default Photo;
