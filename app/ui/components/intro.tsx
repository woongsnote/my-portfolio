import Image from "next/image";
import { css } from "@/styled-system/css";

export const Intro = () => {
  return (
    <div className={profileStyle}>
      <div className={aboutImageContainerStyle}>
        <Image
          src={"/about-image.png"}
          alt="About Image"
          width={200}
          height={200}
          className={aboutImageStyle}
        />
      </div>
      <div className={aboutInfoStyle}>
        <p className="text-base">
          <span className="text-bold">
            새로운 기술에 대한 호기심과 끊임없는 열정을 가지고 있습니다.{" "}
          </span>
          학습한 지식을 직접 구현한 블로그에 정리하고 공유함으로써 지식 공유에도
          기여하고 있습니다.
          <br />
          <span>소통과 협업도 중요시합니다. </span>
          다양한 프로젝트 경험을 통해 프론트엔드와 백엔드 개발자들과의 원활한
          협업 방법과 개발 프로세스를 익혀왔습니다. 팀 내에서 효과적인
          커뮤니케이션과 역할 분담을 통해 일정 관리와 목표 달성을 위한 체계적인
          계획 수립 능력을 갖추고 있습니다. 이러한 노력으로 프로젝트의 완성도가
          높은 팀으로 평가받은 경험이 있습니다.
        </p>
      </div>
    </div>
  );
};

const profileStyle = css({
  display: "flex",
  flexDir: { base: "column", lg: "row" },
  gap: "4",
  alignItems: "center",
});

const aboutImageContainerStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "36",
  h: "36",
  alignSelf: "center",
  sm: { alignSelf: "flex-start" },
  lg: { w: "fit", h: "fit" },
  flexBasis: "1/4",
  justifySelf: "center",
});

const aboutImageStyle = css({
  w: "auto",
  h: "auto",
  rounded: "md",
  alignSelf: "center",
});

const aboutInfoStyle = css({
  flexBasis: "3/4",
  h: "full",
});
