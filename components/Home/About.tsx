import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
const About = () => {
  return (
    <section className="container grid grid-cols-3 gap-4 justify-center">
      <Experience />
      <div className="col-span-3 lg:col-span-2 gap-4 h-full">
        <Education />
        <Skills />
      </div>
    </section>
  );
};

export default About;
