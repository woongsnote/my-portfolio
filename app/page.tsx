import { css } from "@/styled-system/css";
import profile from "@/public/about-image.png";
import Image from "next/image";

export default function Home() {
  const homeStyle = css({
    bg: "white",
    rounded: "lg",
    p: "4",
    boxShadow: "md",
  });

  return (
    <div className={`${homeStyle} breakout`}>
      <span className={css({ fontSize: "sm" })}>Frontend Dev</span>
      <div
        className={css({
          display: "flex",
          justifyContent: { base: "center", md: "space-between" },
          mt: "10",
          flexDir: { base: "column-reverse", md: "row" },
        })}
      >
        <div
          className={css({
            w: { base: "full", md: "2/3" },
          })}
        >
          <h1 className={css({ fontSize: "3xl", fontWeight: "black" })}>
            I&apos;m Moon Ji woong
          </h1>
          <p className={css({ fontSize: "md" })}>
            새로운 기술을 학습하는 것을 즐기는 개발자 문지웅입니다.
          </p>
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
    </div>
  );
}
