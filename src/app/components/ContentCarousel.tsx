"use client";

import React from "react";
import PreviousIcon from "../assets/icons/PreviousIcon";
import NextIcon from "../assets/icons/NextIcon";
import { contents } from "../assets/data";

export default function ContentCarouselComponent() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + (isMobile ? 1 : 2)) % contents.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - (isMobile ? 1 : 2) + contents.length) % contents.length
    );
  };

  return (
    <div>
      <div className="max-w-[802px] max-h-[77px]">
        <p className="text-[28px] text-center md:text-[64px] text-[#6B6356] font-medium leading-[76.8px] z-30">
          Don’t just take our word for it
        </p>
      </div>

      <div className="w-full max-h-[245px] flex justify-between items-center">
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

        <div className="max-w-[1312px] max-h-[245px] grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {contents
            .slice(currentIndex, currentIndex + (isMobile ? 1 : 2))
            .map((item) => {
              return (
                <div
                  key={item.id}
                  className="max-w-[554px] max-h-[169px] flex flex-col items-center"
                >
                  <p className="text-center text-[#6B6356] text-[18px] font-normal leading-[27px]">
                    {item.content}
                  </p>
                  <div className="max-w-[300px] h-[56px] mt-6">
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
    </div>
  );
}
