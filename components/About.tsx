"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import {
  RiBriefcase5Line,
  RiGraduationCapFill,
  RiMailFill,
  RiUser3Fill,
} from "react-icons/ri";

import {
  EducationData as education,
  ExperienceData as experience,
  SkillsData as skills,
} from "@/lib/data";

const InfoData = [
  { icon: <RiUser3Fill />, text: "문지웅" },
  { icon: <RiMailFill />, text: "woongsnote@gmail.com" },
];

const Tools: string[] = ["VsCode", "Notion", "Slack"];

const About = () => {
  return (
    <section className='flex flex-col py-20 px-2 w-full gap-y-6'>
      <h2 className='text-3xl lg:text-5xl text-center font-black'>About Me</h2>
      <div className='flex justify-center'>
        <div className='hidden lg:flex flex-1 items-center justify-center'>
          <Image
            src={"/about-image.png"}
            alt='About Image'
            priority
            width={200}
            height={200}
            className='w-auto h-auto rounded-md self-center'
          />
        </div>
        <div className='flex-1'>
          <Tabs defaultValue='personal'>
            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-xl xl:border rounded-full h-12 items-center dark:border-none'>
              <TabsTrigger className='w-48 xl:w-auto' value='personal'>
                Personal Info
              </TabsTrigger>
              <TabsTrigger className='w-48 xl:w-auto' value='qualifications'>
                Qualifications
              </TabsTrigger>
              <TabsTrigger className='w-48 xl:w-auto' value='skills'>
                Skills
              </TabsTrigger>
            </TabsList>
            <div className='mt-20 xl:mt-8'>
              <TabsContent value='personal'>
                <div className='text-start'>
                  <p className='break-keep mt-2'>
                    <b>
                      새로운 기술에 대한 호기심과 끊임없는 열정을 가지고
                      있습니다.
                    </b>{" "}
                    학습한 지식을 직접 구현한 블로그에 정리하고 공유함으로써
                    지식 공유에도 기여하고 있습니다.
                    <br />
                    <b>소통과 협업도 중요시합니다. </b>
                    다양한 프로젝트 경험을 통해 프론트엔드와 백엔드 개발자들과의
                    원활한 협업 방법과 개발 프로세스를 익혀왔습니다. 팀 내에서
                    효과적인 커뮤니케이션과 역할 분담을 통해 일정 관리와 목표
                    달성을 위한 체계적인 계획 수립 능력을 갖추고 있습니다.
                    이러한 노력으로 프로젝트의 완성도가 높은 팀으로 평가받은
                    경험이 있습니다.
                  </p>
                </div>
                <div className='mt-4 grid xl:grid-cols-2 gap-4 mb-12'>
                  {InfoData.map(({ icon, text }) => (
                    <div
                      key={text}
                      className='flex items-center gap-x-4 mx-auto xl:mx-0 text-start w-full'>
                      <span className='text-primary'>{icon}</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value='qualifications'>
                <div className=''>
                  <h3 className='text-center font-bold text-2xl mb-4'>
                    My Awesome Journey
                  </h3>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                      <div className='flex text-primary gap-x-4 items-center text-lg'>
                        <RiBriefcase5Line />
                        <h4 className='capitalize font-medium'>experience</h4>
                      </div>
                      <ul className='flex flex-col gap-y-4 mt-2 '>
                        {experience.map(({ company, years, role }) => (
                          <li
                            key={company}
                            className=' pl-4 flex flex-col gap-x-8 group bg-accent rounded-lg p-2'>
                            <span className='font-semibold text-xl leading-none mb-2'>
                              {company}
                            </span>
                            <span className='text-lg leading-none text-muted-foreground mb-4'>
                              {role}
                            </span>
                            <span className='font-medium'>{years}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className='flex text-primary gap-x-4 items-center text-lg'>
                        <RiGraduationCapFill />
                        <h4 className='capitalize font-medium'>education</h4>
                      </div>
                      <ul className='flex flex-col gap-y-4 mt-2 '>
                        {education.map(
                          ({ university, company, years, qualification }) => (
                            <li
                              key={qualification}
                              className=' pl-4 flex flex-col gap-x-8 group bg-accent rounded-lg p-2'>
                              <span className='font-semibold text-xl leading-none mb-2'>
                                {company ? company : university}
                              </span>
                              <span className='text-lg leading-none text-muted-foreground mb-4'>
                                {qualification}
                              </span>
                              <span className='font-medium'>{years}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value='skills'>
                <div className='text-center xl:text-start'>
                  <h3 className='text-2xl font-bold mb-4'>
                    Tools I Use Everyday
                  </h3>
                </div>
                <div className='flex flex-col gap-y-4'>
                  <h4 className='border-b text-xl font-bold'>Skills</h4>
                  {skills.map(({ title, description }) => (
                    <div key={title} className='group bg-accent p-2 rounded-md'>
                      <span className='text-lg font-bold leading-none'>
                        {title}
                      </span>
                      <p className='text-sm keep-all'>{description}</p>
                    </div>
                  ))}
                </div>
                <div className='flex flex-col gap-y-4 mt-2'>
                  <h4 className='border-b text-xl font-bold'>Tools</h4>
                  <div className='flex gap-x-2'>
                    {Tools.map((tool) => (
                      <span
                        key={tool}
                        className='border-2 rounded-full px-2 font-bold'>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
