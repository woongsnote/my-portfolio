import { FiDownload } from "react-icons/fi";
import Photo from "./Photo";
import Socials from "./Socials";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="h-full">
      <div className="flex flex-col lg:flex-row items-center lg:pt-8 lg:pb-24 w-full justify-between mx-auto">
        <div className="text-center lg:text-start order-2 lg:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-6">
            Hello, I&apos;m <br />
            <span className="text-accent">Jiwoong Moon</span>
          </h1>
          <p className="max-w-lg mb-9 text-white/80">
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and technologies.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <a href="/CV.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2">
                <span className="">Download CV</span>
                <FiDownload />
              </Button>
            </a>
            <div className="mb-8 lg:mb-0">
              <Socials
                containerStyles="flex gap-6"
                iconStyles="size-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all hover:scale-110 duration-500"
              />
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full items-center justify-center p-6 overflow-hidden order-1 lg:order-none mb-8 lg:mb-0 max-w-xs border border-accent rounded-full">
          <Photo />
        </div>
      </div>
    </section>
  );
};

export default Hero;
