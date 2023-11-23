"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ProjectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import SectionTitle from "./SectionTitle";

const MAX_PROJECTS = 3;
const latestProjects = ProjectsData.slice(0, MAX_PROJECTS);

const Projects = () => {
  return (
    <section className='flex flex-col xl:flex-row mb-12 items-center justify-center relative w-full'>
      <div className='w-full max-w-md mx-auto xl:mx-0 text-center xl:text-start mb-12 flex flex-col gap-y-4'>
        <SectionTitle title='Latest Projects' />
        <p className='mb-4 break-keep'>
          최근에 구현했던 프로젝트들입니다. 더 많은 프로젝트는 아래 버튼을
          클릭해서 확인하실 수 있습니다.
        </p>
        <Link href='/projects' className='w-fit mx-auto'>
          <Button>All Projects</Button>
        </Link>
      </div>
      <div className='xl:max-w-3xl'>
        <Swiper
          className='h-96'
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 } }}
          spaceBetween={32}
          modules={[Pagination]}
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
