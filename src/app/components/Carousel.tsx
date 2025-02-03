"use client";
import Image from "next/image";
import { concerns_photos } from "../assets/data";
import React from "react";
import PreviousIcon from "../assets/icons/PreviousIcon";
import NextIcon from "../assets/icons/NextIcon";

export default function PhotosCarouselComponent() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % concerns_photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < 3 ? concerns_photos.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="relative w-full max-h-[616px] mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
        {concerns_photos.slice(currentIndex, currentIndex + 3).map((photo) => {
          return (
            <div
              key={photo.id}
              className="relative bg-gradient-to-l from-black to-[#957963] rounded-[28px]"
            >
              <Image
                src={photo.photo}
                alt={photo.alt}
                className="min-h-[616px] min-w-[416px] rounded-[28px] bg-gradient-to-r from-black to-[#957963]"
              />
              <p className="absolute bottom-4 left-4 right-0 text-[#F4F4F4] text-[48px] leading-[57.6px] font-normal">
                {photo.content}
              </p>
            </div>
          );
        })}
      </div>
      <div className="absolute flex justify-end items-center w-full my-5">
        <button
          type="button"
          title="Previous"
          className="z-0 mx-2"
          onClick={prevSlide}
        >
          <span title="Previous">
            <PreviousIcon />
          </span>
        </button>

        <button
          type="button"
          title="Next"
          className="z-0 mx-2"
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
