import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
} from "@/components";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <>
      <HeroSection />
   
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
