"use client";

import { css } from "@/styled-system/css";
import profile from "@/public/about-image.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import ProjectList from "@/components/ProjectList";
import ContactLink from "@/components/ContactLink";
import DownloadLink from "@/components/DownloadLink";
import SocialLinks from "@/components/SocialLinks";
import { RiArrowRightLine } from "react-icons/ri";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}>
      <span className={css({ fontSize: "sm" })}>Frontend Dev</span>
      <div
        className={css({
          display: "flex",
          justifyContent: { base: "center", md: "space-between" },
          mt: "4",
          flexDir: { base: "column-reverse", md: "row" },
          alignItems: "center",
        })}>
        <div
          className={css({
            textAlign: { base: "center", md: "start" },
          })}>
          <h1
            className={css({
              fontSize: { base: "lg", md: "3xl" },
              fontWeight: "black",
            })}>
            I&apos;m Moon Ji Woong
          </h1>
          <p
            className={css({
              fontSize: { base: "xs", md: "sm" },
            })}>
            새로운 기술을 학습하는 것을 즐기는 개발자 문지웅입니다.
          </p>
          <div
            className={css({
              display: "flex",
              flexDir: "row",
              gap: "4",
              alignItems: "center",
              mt: "4",
              justifyContent: { base: "center", md: "start" },
            })}>
            <ContactLink />
            <DownloadLink />
          </div>
        </div>

        <div
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            w: "32",
            h: "32",
            mx: "auto",
            border: "1px solid #eee",
            rounded: "full",
            p: "3",
            my: "4",
          })}>
          <Image
            src={profile}
            alt='profile'
            priority
            className={css({
              w: "full",
              h: "full",
              objectFit: "cover",
              rounded: "full",
            })}
          />
        </div>
      </div>

      {/* Project List */}
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          bg: "gray.100",
          p: "2",
          rounded: "md",
          mt: "8",
        })}>
        <div
          className={css({
            display: "flex",
            flexDir: "row",
            justifyContent: "space-between",
          })}>
          <span>Projects</span>
          <Link
            href={"/projects"}
            className={css({
              px: "2",
              rounded: "lg",
              fontSize: "sm",
              display: "flex",
              gap: "1",
              alignItems: "center",
              bgColor: "black",
              color: "white",
              _hover: { bgColor: "blue.500" },
            })}>
            View All
            <RiArrowRightLine />
          </Link>
        </div>
        <ProjectList />
      </div>

      {/* My Socials */}
      <SocialLinks />
    </motion.div>
  );
}
