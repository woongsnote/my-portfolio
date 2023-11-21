import Image from "next/image";
import profile from "@/app/assets/profile.png";
const ProfileImage = () => {
  return (
    <div>
      <Image src={profile} alt={""} width={300} height={300} />
    </div>
  );
};

export default ProfileImage;
