import Image from "next/image";
import aboutImage from "@/app/assets/about-image.png";
import { RiUser2Line } from "react-icons/ri";

const infoData = [
  {
    icon: <RiUser2Line />,
    text: "문지웅(Moon Jiwoong)",
  },
];

const qualificationData = [];

const skillsData = [];

const About = () => {
  return (
    <section className="flex flex-col gap-y-8 lg:min-h-screen">
      <h2 className="text-3xl lg:text-5xl text-center font-black">About Me</h2>
      <div className="flex">
        <div className="hidden lg:flex w-72 h-72 bg-gray-400 rounded-lg overflow-hidden">
          <Image src={aboutImage} alt="about" width={500} height={500} />
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default About;
