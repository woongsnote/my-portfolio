"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ProjectsData } from "@/lib/data";

import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

const MAX_PROJECTS = 4;
const latestProjects = ProjectsData.slice(0, MAX_PROJECTS);

const Projects = () => {
  return (
    <section className='flex flex-col xl:flex-row mb-12 items-center justify-center relative w-full min-h-screen h-full'>
      <div className='w-full xl:max-w-md mx-auto xl:mx-0 text-center xl:text-start mb-12 flex flex-col gap-y-4 p-2'>
        <SectionTitle title='최신 프로젝트' />
        <p className='mb-4 break-keep text-center xl:text-start'>
          최근에 구현했던 프로젝트들입니다. 더 많은 프로젝트는 아래 버튼을
          클릭해서 확인하실 수 있습니다.
        </p>
        <Link href='/projects' className='w-fit mx-auto'>
          <Button>전체 프로젝트</Button>
        </Link>
      </div>
      <div className='w-full lg:max-w-4xl xl:max-w-3xl py-2 mx-auto'>
        <Swiper
          className='h-[440px]'
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={32}
          centeredSlides={true}
          pagination={{ clickable: true }}>
          {latestProjects.map((project) => (
            <SwiperSlide key={project.title} className=''>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
