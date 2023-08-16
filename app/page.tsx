import { Suspense } from "react";
import { AboutMe } from "./components/about";
import { Divider, Loading } from "./components/common";
import { Hero } from "./components/hero";
import { ProjectList } from "./components/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <AboutMe />
      <Divider />
      <Suspense fallback={<Loading/>}>
        <ProjectList />
      </Suspense>
    </>
  );
}
