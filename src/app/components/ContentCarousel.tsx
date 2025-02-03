"use client";

import React from "react";
import PreviousIcon from "../assets/icons/PreviousIcon";
import NextIcon from "../assets/icons/NextIcon";

export default function ContentCarouselComponent() {
  // const [currentIndex, setCurrentIndex] = React.useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % concerns_photos.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex < 1 ? concerns_photos.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <>
      <div className="w-[802px] h-[77px] z-30">
        <p className="text-center text-[64px] text-[#6B6356] font-medium leading-[76.8px]">
          Don’t just take our word for it
        </p>
      </div>

      <div className="w-full h-[245px]">
        <div className="w-[1312px] h-[245px] flex justify-between items-center mx-auto">
          <PreviousIcon />
          <div className="w-[554px] h-[169px] flex flex-col items-center">
            <p className="text-center text-[#6B6356] text-[18px] font-normal leading-[27px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero.&quot;
            </p>
            <div className="w-[300px] h-[56px] mt-6">
              <p className="text-center text-[#6B6356] text-[24px] font-medium leading-[28.8px]">
                Name Surname
              </p>
              <p className="text-center text-[#6B6356] text-[18px] font-normal leading-[27px]">
                Position, Company name
              </p>
            </div>
          </div>
          <div className="w-[554px] h-[169px] flex flex-col items-center">
            <p className="text-center text-[#6B6356] text-[18px] font-normal leading-[27px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero.&quot;
            </p>
            <div className="w-[300px] h-[56px] mt-6">
              <p className="text-center text-[#6B6356] text-[24px] font-medium leading-[28.8px]">
                Name Surname
              </p>
              <p className="text-center text-[#6B6356] text-[18px] font-normal leading-[27px]">
                Position, Company name
              </p>
            </div>
          </div>
          <NextIcon />
        </div>
      </div>
    </>
  );
}
