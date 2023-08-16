import { SectionTitle } from "../common";

const AboutMe = () => {
  return (
    <section id="about" className="h-screen pt-16 px-8 md:px-0">
      <SectionTitle title="About Me" />
      <div className="mt-4">
        <h2 className="text-2xl font-bold underline underline-offset-4">새로운 기술에 관심이 많은 개발자</h2>
        <p className="text-md md:text-lg">
          아이디어를 <strong>구현</strong>하는 것에 관심이 있습니다. 특히,
          시각적으로 결과물을 확인할 수 있는 작업 방식이 매력적으로 다가와서{" "}
          <strong>프론트엔드 개발자</strong>의 길을 걷고자 노력하고 있습니다.
          새로운 기술에 대한 <strong>호기심</strong>과 <strong>열정</strong>이
          있어 이를 학습하고 프로젝트에 적용하는 과정에서 큰 성취감을 느끼고
          있습니다. 최근에는 <strong>Next.js</strong>와{" "}
          <strong>TypeScript</strong>를 학습하고 이를 기반으로{" "}
          <strong>기술 블로그</strong>를 구현했습니다. 매주 학습한 지식을
          정리하고 블로그를 통해 공유하고 있습니다.
        </p>
        <h2 className="text-2xl font-bold mt-4 underline underline-offset-4">팀원들과 소통하는 개발자</h2>
        <p className="text-md md:text-lg">
          프론트 및 백엔드 개발자들과의 협업 경험을 통해{" "}
          <strong>동료와 함께 일하는 방법</strong>, <strong>기획</strong>부터{" "}
          <strong>배포</strong> 및 <strong>운영</strong> 등{" "}
          <strong>개발 프로세스</strong>를 습득했습니다. 매일 회의를 통해 다양한
          의견을 나누고, 프로젝트에 반영했습니다. 팀 내에서{" "}
          <strong>효율적인 커뮤니케이션</strong>과 <strong>역할 분담</strong>을
          통해 일정 관리 및 목표 달성을 위한 <strong>계획 수립 능력</strong>을
          향상하였습니다. 이러한 노력 덕분에 프로젝트의{" "}
          <strong>완성도가 높은 팀</strong>으로 평가 받은 경험이 있습니다.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
