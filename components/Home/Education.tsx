import { Card, GridContainer } from "@/components/Common";
import { education } from "@/data";

const Education = () => {
  return (
    <GridContainer
      title={education.title}
      containerClassName="flex flex-col gap-6 text-center lg:text-start mb-8 col-span-3 lg:col-span-2 bg-[#232329] p-8 h-fit rounded-xl">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {education.items.map(({ institution, degree, duration }) => (
          <Card
            key={institution}
            title={institution}
            description={degree}
            duration={duration}
          />
        ))}
      </ul>
    </GridContainer>
  );
};

export default Education;
