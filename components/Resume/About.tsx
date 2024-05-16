const about = {
  title: "About Me",
  description: "Lorem",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jiwoong Moon",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+82) 010 4032 0007",
    },
    {
      fieldName: "Experiences",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "woongsnote@gmail.com",
    },
  ],
};

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-4xl font-bold">{about.title}</h3>
      <p className="max-w-3xl text-white/60 mx-auto lg:mx-0">
        {about.description}
      </p>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-3xl mx-auto lg:mx-0">
        {about.info.map((item) => (
          <li
            key={item.fieldName}
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            <span className="text-white/60">{item.fieldName}</span>
            <span className="text-xl">{item.fieldValue}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
