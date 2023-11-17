import Image from "next/image";
import profile from "@/app/assets/profile.png";
import { css } from "@/styled-system/css";

export const ProfileImage = () => {
  return (
    <div className={profileContainerStyle}>
      <Image
        src={profile}
        alt="profile"
        width={100}
        height={100}
        priority
        className={imageStyle}
      />
    </div>
  );
};

const profileContainerStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mx: "auto",
  p: "4",
  rounded: "full",
  w: "32",
  h: "32",
  border: "4px solid #e5e7eb",
});

const imageStyle = css({
  w: "auto",
  h: "auto",
  alignSelf: "center",
});
