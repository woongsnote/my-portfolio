"use client";

import { TypeAnimation } from "react-type-animation";
import ProfileImage from "./ProfileImage";

const Hero = () => {
  return (
    <section className='flex flex-row-reverse w-full' id='home'>
      <ProfileImage />
      <div>
        <h1 className={""}>
          <span className={""}>Hello, I&apos;m </span>
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
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className=''>
          새로운 기술을 학습하고 적용하는 것을 즐기는 개발자 <b>문지웅</b>
          입니다.
        </p>
      </div>
    </section>
  );
};

export default Hero;
