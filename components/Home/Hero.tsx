"use client";

import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";
import { Photo } from "@/components/Home";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row items-center lg:pt-8 lg:pb-24 w-full justify-between mx-auto">
        <div className="text-center lg:text-start order-2 lg:order-none w-full lg:w-2/3">
          <h1 className="mb-4 text-2xl sm:text-3xl lg:text-5xl font-black drop-shadow-lg !leading-normal">
            안녕하세요. 저는
            <br />
            <TypeAnimation
              sequence={[
                "웹 개발자",
                1000,
                "프론트엔드 개발자",
                1000,
                "리액트 개발자",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
            />
            <br />
            <span>입니다.</span>
          </h1>
          <p className="break-keep mb-4 lg:text-xl">
            새로운 기술을 학습하고 적용하는 것을 즐기는 개발자 <b>문지웅</b>
            입니다.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <a href="/CV.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <span className="">이력서</span>
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
        <Photo />
      </div>
    </section>
  );
};

export default Hero;
