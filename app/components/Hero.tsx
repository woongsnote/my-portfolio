import { SocialLinks, DownloadButton, ProfileImage } from ".";


const Hero = () => {
  return (
    <div className="flex items-center justify-center md:space-x-4 text-xl md:pt-6 flex-col-reverse md:flex-row md:my-4 md:w-full">
      <div className="w-full md:w-1/2 space-y-6 px-4 font-bold justify-center flex flex-col md:justify-normal items-center md:items-start">
        <p>Hello!</p>
        <h1 className="text-4xl">I&apos;m Ji Woong Moon</h1>
        <p>A Front-End Developer</p>
        <SocialLinks />
        <DownloadButton />
      </div>
      <ProfileImage />
    </div>
  );
};

export default Hero;
