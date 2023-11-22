import React from "react";

type PageTitleProps = {
  title: string;
};

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h2 className="text-center w-full text-4xl font-black mt-8 mb-12">{title}</h2>
  );
};

export default PageTitle;
