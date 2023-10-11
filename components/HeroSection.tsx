"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8 items-center pt-2"
      id="home">
      <div className="flex items-center justify-center mx-auto p-4 bg-primary-200 rounded-full w-fit h-fit">
        <Image
          src={"/profile.png"}
          alt="profile"
          width={140}
          height={140}
          priority
          className="w-auto h-auto self-center"
        />
      </div>
      <div className="text-center sm:text-left h-full">
        <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
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
        <p className="text-base sm:text-lg mb-6 lg:text-3xl">
          새로운 기술을 학습하는 것을 즐기는 개발자{" "}
          <span className="font-bold">문지웅</span>입니다.
        </p>
        <div className="flex items-center justify-content-center gap-4">
          <Link
            href="#contact"
            className="inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
            Contact Me
          </Link>
          <a
            href="/CV.pdf"
            download
            className="px-1 py-1 inline-block w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 lg:mt-0">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </a>
          <SocialLinks />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
