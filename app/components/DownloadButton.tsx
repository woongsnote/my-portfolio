"use client";

const DownloadButton = () => {
  const onBtnHandler = () => {
    console.log("btn Clicked")
  };

  return (
    <button
      className="border shadow-md p-2 rounded-lg mt-8 cursor-pointer w-fit"
      onClick={onBtnHandler}
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
