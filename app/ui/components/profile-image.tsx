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
  w: { base: "32", lg: "48" },
  h: { base: "32", lg: "48" },
  border: "4px solid #e5e7eb",
  shadow: "md",
});

const imageStyle = css({
  w: "auto",
  h: "auto",
  alignSelf: "center",
});
