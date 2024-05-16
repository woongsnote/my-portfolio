import { TExperience } from "@/types";

const experience: TExperience = {
  title: "My experience",
  description: "All of my work Experience",
  items: [
    {
      company: "피노스토리",
      duration: "2020.08 - 2021.07",
      position: "연구원",
    },
    {
      company: "에프티랩",
      duration: "2019.04 - 2019.11",
      position: "연구원",
    },
    {
      company: "아이엠티에스",
      duration: "2017.02 - 2017.09",
      position: "연구원",
    },
  ],
};

const Experience = () => {
  return (
    <div className="flex flex-col gap-6 text-center lg:text-start mb-8">
      <h3 className="text-4xl font-bold">{experience.title}</h3>
      <p className="max-w-3xl text-white/60 mx-auto lg:mx-0">
        {experience.description}
      </p>
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {experience.items.map((item) => (
            <li
              key={item.company}
              className="flex flex-col justify-center items-center lg:items-start gap-1 bg-[#232329] py-4 px-8 rounded-xl"
            >
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-72 min-h-16">{item.position}</h3>
              <div className="flex items-center gap-3">
                <span className="bg-accent size-2 rounded-full"></span>
                <p>{item.company}</p>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Experience;
