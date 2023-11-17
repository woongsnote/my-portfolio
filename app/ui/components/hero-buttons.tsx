import { css } from "@/styled-system/css";
import { ContactButton } from "./contact-button";
import { DownloadButton } from "./download-button";
import { SocialLinks } from "./social-links";

export const HeroButtons = () => {
  return (
    <div className={heroButtonsStyle}>
      <ContactButton />
      <DownloadButton />
      <SocialLinks />
    </div>
  );
};

const heroButtonsStyle = css({
  display: "flex",
  flexDir: { base: "column", lg: "row" },
  alignItems: "center",
  justifyContent: "space-evenly",
});
