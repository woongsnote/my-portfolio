import React from "react";
import { RiDownloadLine } from "react-icons/ri";
const DownloadButton = () => {
  return (
    <a
      href="/CV.pdf"
      download
      className="px-1 py-1 inline-block w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 lg:mt-0">
      <span className="w-full bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 flex flex-row gap-2 items-center text-center justify-center">
        Download CV <RiDownloadLine />
      </span>
    </a>
  );
};

export default DownloadButton;
