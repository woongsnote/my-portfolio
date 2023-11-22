"use client";

import { TypeAnimation } from "react-type-animation";
import ProfileImage from "./ProfileImage";
import {
  RiArrowDownSLine,
  RiDownloadLine,
  RiSendPlaneFill,
} from "react-icons/ri";
import Link from "next/link";
import { Button } from "./ui/button";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 lg:py-28 lg:min-h-screen h-full flex flex-col gap-x-8 flex-grow relative">
      <div className="flex justify-center gap-x-8">
        <div className="flex w-full lg:max-w-xl flex-col justify-center mx-auto xl:mx-0">
          <span className="uppercase text-primary font-black">
            Web Developer
          </span>
          <h1 className="mb-4 text-3xl lg:text-5xl font-black text-start drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Moon Jiwoong",
                1000,
                "Web Developer",
                1000,
                "Front-End Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="break-keep mb-2 text-sm lg:text-2xl">
            새로운 기술을 학습하고 적용하는 것을 즐기는 개발자 <b>문지웅</b>
            입니다.
          </p>
          <div className="flex flex-col lg:flex-row mt-8 gap-y-8 gap-x-3 mx-auto xl:mx-0 mb-12">
            <Link href="/contact" className="flex items-center">
              <Button className="gap-x-2 text-lg mx-auto w-full hover:shadow-xl">
                Contact me <RiSendPlaneFill size={18} />
              </Button>
            </Link>
            <a href="/CV.pdf" className="flex items-center">
              <Button
                variant="secondary"
                className="gap-x-2 text-lg mx-auto w-full hover:shadow-xl"
              >
                Download CV <RiDownloadLine size={18} />
              </Button>
            </a>
          </div>
          <Socials />
        </div>
        <ProfileImage />
      </div>
      <div className="hidden lg:flex absolute left-2/4 bottom-44 lg:bottom-24 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  );
};

export default Hero;
