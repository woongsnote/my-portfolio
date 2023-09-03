import { Suspense } from "react";
import { AboutMe } from "./components/about";
import { Divider, Loading } from "./components/common";
import { ProjectList } from "./components/projects";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="container mx-auto px-12 py-4">
      <HeroSection />
      <AboutMe />
      <Divider />
      <Suspense fallback={<Loading />}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
