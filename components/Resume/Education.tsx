import { TEducation } from "@/types";

const education: TEducation = {
  title: "My Educations",
  description: "Lorem",
  items: [
    {
      institution: "팀스파르타",
      degree: "React 웹 개발 교육",
      duration: "2022.08 - 2022.11",
    },
    {
      institution: "한국산업기술대학교",
      degree: "전자공학과",
      duration: "2011.03 - 2017.02",
    },
  ],
};

const Education = () => {
  return (
    <div className="flex flex-col gap-6 text-center lg:text-start mb-8">
      <h3 className="text-4xl font-bold">{education.title}</h3>
      <p className="max-w-3xl text-white/60 mx-auto lg:mx-0">
        {education.description}
      </p>
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {education.items.map((item) => (
          <li
            key={item.duration}
            className="flex flex-col justify-center items-center lg:items-start gap-1 bg-[#232329] py-4 px-8 rounded-xl">
            <span className="text-accent">{item.duration}</span>
            <h3 className="text-xl max-w-72 min-h-16">{item.degree}</h3>
            <div className="flex items-center gap-3">
              <span className="bg-accent size-2 rounded-full"></span>
              <p>{item.institution}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
