"use client";

import Image from "next/image";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { TAB_DATA } from "@/lib/data";
import SectionTitle from "./SectionTitle";

const AboutSection = () => {

  return (
    <section
      className="md:grid md:grid-cols-2 gap-8 items-center py-20 text-white"
      id="about"
    >
      <div className="hidden sm:block">
        <Image
          src={"/about-image.jpg"}
          alt="About Image"
          width={500}
          height={500}
          className="w-auto h-auto"
        />
      </div>
      <div>
        <SectionTitle title={"About Me"} />
        <p className="text-base lg:text-lg">
          새로운 기술에 대한 호기심과 끊임없는 열정을 가지고 있어, 이를 학습하고
          실제 프로젝트에 적용하는 것에서 큰 성취감을 느끼고 있습니다. 개발 관련
          지식 공유를 위한 기술 블로그를 구현하였습니다. 주기적으로 학습한
          지식을 정리하고 공유함으로써 지식 공유에도 기여하고 있습니다.
          <br /> 소통과 협업에도 큰 가치를 두고 있습니다. 다양한 프로젝트 경험을
          통해 프론트엔드와 백엔드 개발자들과의 원활한 협업 방법과 개발
          프로세스를 익혀왔습니다. 팀 내에서 효과적인 커뮤니케이션과 역할 분담을
          통해 일정 관리와 목표 달성을 위한 체계적인 계획 수립 능력을 갖추고
          있습니다. 이러한 노력으로 프로젝트의 완성도가 높은 팀으로 평가 받은
          경험이 있습니다.
        </p>

        <div className="flex flex-col justify-start mt-8">
          <Tabs
            variant="underlined"
            aria-label="Dynamic tabs"
            items={[...TAB_DATA]}
          >
            {(item) => (
              <Tab key={item.id} title={item.title}>
                <Card>
                  <CardBody>
                    <ul className="list-disc pl-2">
                      {item.content.map((content) => (
                        <li key={content}>{content}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
