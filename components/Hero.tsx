"use client";

import { TypeAnimation } from "react-type-animation";
import ProfileImage from "./ProfileImage";
import { RiArrowDownSLine, RiDownloadLine } from "react-icons/ri";
import { Button } from "./ui/button";
import Socials from "./Socials";
import ContactButton from "./ContactButton";

const Hero = () => {
  return (
    <section className='py-12 lg:py-24 lg:min-h-screen h-full flex flex-col gap-x-8 flex-grow relative'>
      <div className='flex justify-center gap-x-8'>
        <div className='flex w-full flex-col justify-center mx-auto xl:mx-0 gap-y-1'>
          <h1 className='mb-4 text-3xl lg:text-5xl font-black text-start drop-shadow-lg flex flex-col'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-900'>
              안녕하세요, 저는{" "}
            </span>
            <TypeAnimation
              sequence={[
                "웹 개발자입니다",
                1000,
                "프론트엔드 개발자입니다",
                1000,
                "리액트 개발자입니다",
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='break-keep mb-2 text-sm lg:text-xl'>
            새로운 기술을 학습하고 적용하는 것을 즐기는 개발자 <b>문지웅</b>
            입니다. 최근 <b>Next.js</b>를 학습하고 있습니다.
          </p>
          <div className='flex flex-col lg:flex-row mt-8 gap-y-8 gap-x-3 mx-auto xl:mx-0 mb-12'>
            <ContactButton />
            <a href='/CV.pdf' className='flex items-center'>
              <Button
                variant='outline'
                className='gap-x-2 text-lg mx-auto w-full hover:shadow-xl'>
                이력서 저장하기 <RiDownloadLine size={18} />
              </Button>
            </a>
          </div>
          <Socials />
        </div>
        <ProfileImage />
      </div>
      <div className='hidden lg:flex absolute left-2/4 bottom-44 lg:bottom-12 animate-bounce'>
        <RiArrowDownSLine className='text-3xl text-primary' />
      </div>
    </section>
  );
};

export default Hero;
