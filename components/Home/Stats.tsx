"use client";

import CountUp from "react-countup";

const stats = [
  { num: 2, text: "Years of experience" },
  { num: 12, text: "Projects completed" },
  { num: 100, text: "Code commits" },
  { num: 100, text: "Code commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 lg:py-0 mb-8">
      <div className="flex flex-wrap gap-6 w-full">
        {stats.map(({ num, text }, index) => (
          <div
            className="flex-1 flex gap-4 items-center justify-center lg:justify-start"
            key={index}>
            <CountUp
              end={num}
              duration={5}
              delay={2}
              className="text-4xl lg:text-6xl font-extrabold"
            />
            <p className="leading-snug text-white/80">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
