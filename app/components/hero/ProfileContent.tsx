import { Intro, SocialLinks, DownloadButton } from ".";

const ProfileContent = () => {
  return (
    <div className="w-full md:w-1/2 space-y-6 px-4 md:px-0 font-bold justify-center flex flex-col md:justify-normal items-center md:items-start mx-auto">
      <Intro />
      <SocialLinks />
      <DownloadButton />
    </div>
  );
};

export default ProfileContent;
