"use client";

import React from "react";
import PreviousIcon from "../assets/icons/PreviousIcon";
import NextIcon from "../assets/icons/NextIcon";
import { contents } from "../assets/data";

export default function ContentCarouselComponent() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % contents.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < 3 ? contents.length - 2 : prevIndex - 2
    );
  };

  return (
    <>
      <div className="w-[802px] h-[77px]">
        <p className="text-center text-[64px] text-[#6B6356] font-medium leading-[76.8px]">
          Don’t just take our word for it
        </p>
      </div>

      <div className="w-full h-[245px] flex justify-between items-center">
        <button
          type="button"
          title="Previous"
          className="z-0 mx-10"
          onClick={prevSlide}
        >
          <span title="Previous">
            <PreviousIcon />
          </span>
        </button>

        <div className="w-[1312px] h-[245px] grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {contents.slice(currentIndex, currentIndex + 2).map((item) => {
            return (
              <div
                key={item.id}
                className="w-[554px] h-[169px] flex flex-col items-center"
              >
                <p className="text-center text-[#6B6356] text-[18px] font-normal leading-[27px]">
                  {item.content}
                </p>
                <div className="w-[300px] h-[56px] mt-6">
                  <p className="text-center text-[#6B6356] text-[24px] font-medium leading-[28.8px]">
                    {item.title}
                  </p>
                  <p className="text-center text-[#6B6356] text-[18px] font-normal leading-[27px]">
                    {item.position}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          title="Next"
          className="z-0 mx-10"
          onClick={nextSlide}
        >
          <span title="Next">
            <NextIcon />
          </span>
        </button>
      </div>
    </>
  );
}
