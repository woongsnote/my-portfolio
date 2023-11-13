"use client";

import { css } from "@/styled-system/css";
import profile from "@/public/about-image.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";
import ProjectList from "@/components/ProjectList";
import ContactLink from "@/components/ContactLink";
import DownloadLink from "@/components/DownloadLink";
import SocialLinks from "@/components/SocialLinks";
import PageTitle from "@/components/PageTitle";
import { Project } from "@/types";
import { Projects } from "@/data/projects";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const recentProjects: Project[] = Projects.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <PageTitle title="Frontend Developer" />
      <div
        className={css({
          display: "flex",
          justifyContent: { base: "center", md: "space-between" },
          mt: "4",
          flexDir: { base: "column-reverse", md: "row" },
          alignItems: "center",
        })}
      >
        <div
          className={css({
            textAlign: { base: "center", md: "start" },
          })}
        >
          <h1
            className={css({
              fontSize: { base: "lg", md: "3xl" },
              fontWeight: "black",
            })}
          >
            I&apos;m{" "}
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
          <p className={css({ fontSize: { base: "xs", md: "sm" } })}>
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
            })}
          >
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
          })}
        >
          <Image
            src={profile}
            alt="profile"
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
          bgColor: { base: "gray.100", _dark: "#2c2c2c" },
          p: "2",
          rounded: "md",
          mt: "8",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDir: "row",
            justifyContent: "space-between",
          })}
        >
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
              bgColor: { base: "black", _dark: "#373737" },
              color: "white",
              _hover: { bgColor: "blue.500" },
            })}
          >
            View All
            <RiArrowRightLine />
          </Link>
        </div>
        <ProjectList projects={recentProjects} />
      </div>

      {/* My Socials */}
      <SocialLinks />
    </motion.div>
  );
}
