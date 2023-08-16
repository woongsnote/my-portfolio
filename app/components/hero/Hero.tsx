import { SocialLinks, DownloadButton, ProfileImage, Intro } from ".";
import ProfileContent from "./ProfileContent";

const Hero = () => {
  return (
    <section className="flex items-center justify-center md:space-x-4 text-xl flex-col-reverse md:flex-row md:w-full md:py-28 py-4 gap-4">
      <ProfileContent />
      <ProfileImage />
    </section>
  );
};

export default Hero;
