import { Card, GridContainer } from "@/components/Common";
import { experience } from "@/data";

const Experience = () => {
  return (
    <GridContainer
      containerClassName="flex flex-col gap-6 text-center lg:text-start mb-8 col-span-3 lg:col-span-1 bg-[#232329] p-8 rounded-xl h-fit"
      title={experience.title}>
      <ul className="grid grid-cols-1 gap-4">
        {experience.items.map(({ company, duration, position }) => (
          <Card
            key={company}
            title={company}
            description={position}
            duration={duration}
          />
        ))}
      </ul>
    </GridContainer>
  );
};

export default Experience;
