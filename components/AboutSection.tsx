"use client";

import Image from "next/image";
import { Tab, Tabs } from "@nextui-org/react";
import { TAB_DATA } from "@/lib/data";
import SectionTitle from "./SectionTitle";

const AboutSection = () => {
  return (
    <section
      className="md:grid md:grid-cols-2 gap-8 items-center py-20"
      id="about"
    >
      <div className="hidden sm:flex items-center justify-center h-full">
        <Image
          src={"/about-image.png"}
          alt="About Image"
          priority
          width={500}
          height={500}
          objectFit="cover"
          className="w-3/4 h-auto rounded-md"
        />
      </div>
      <div className="h-full">
        <SectionTitle title={"About Me"} />
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

        <div className="flex flex-col justify-start mt-8">
          <Tabs variant="light" aria-label="Dynamic tabs" items={[...TAB_DATA]}>
            {(item) => (
              <Tab key={item.id} title={item.title}>
                <ul className="list-disc pl-2">
                  {item.content.map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
