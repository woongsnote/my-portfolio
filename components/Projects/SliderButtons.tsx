"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

type SliderButtonsProps = {
  containerStyles: string;
  buttonStyles: string;
  iconsStyles: string;
};

const SliderButtons = ({
  containerStyles,
  buttonStyles,
  iconsStyles,
}: SliderButtonsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={buttonStyles} onClick={()=>swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={buttonStyles} onClick={()=>swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default SliderButtons;
