import React from "react";
type CardProps = {
  title: string;
  description: string;
  duration: string;
};
const Card = ({ title, description, duration }: CardProps) => {
  return (
    <li
      key={title}
      className="flex flex-col justify-center items-center lg:items-start gap-1 rounded-xl w-full">
      <h3 className="text-xl w-full">{title}</h3>
      <div className="flex items-center gap-3">
        <span className="bg-accent size-2 rounded-full"></span>
        <p>{description}</p>
      </div>
      <span className="text-accent">{duration}</span>
    </li>
  );
};

export default Card;
