"use client";
import Image from "next/image";
import { concerns_photos } from "../assets/data";
import React, { useEffect, useState } from "react";
import PreviousIcon from "../assets/icons/PreviousIcon";
import NextIcon from "../assets/icons/NextIcon";
import { IconButton } from "@mui/material";

export default function PhotosCarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
    };

    // Kiểm tra kích thước ban đầu
    handleResize();

    // Thêm listener cho resize
    window.addEventListener("resize", handleResize);

    // Dọn dẹp listener khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + (isTablet ? 2 : 3)) % concerns_photos.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < (isTablet ? 2 : 3)
        ? concerns_photos.length - (isTablet ? 2 : 3)
        : prevIndex - (isTablet ? 2 : 3)
    );
  };

  return (
    <div className="relative w-full max-h-[616px] mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
        {concerns_photos
          .slice(currentIndex, currentIndex + (isTablet ? 2 : 3))
          .map((photo) => {
            return (
              <div
                key={photo.id}
                className="relative lg:min-h-[616px] rounded-[28px] border-0 flex flex-col justify-center items-center"
              >
                <Image
                  src={photo.photo}
                  alt={photo.alt}
                  className="min-w-[313px] min-h-[208px] lg:min-h-[616px] lg:min-w-[416px] rounded-[28px]"
                />
                <p className="absolute bottom-4 left-4 right-0 text-[#F4F4F4] text-[24px] lg:text-[48px] leading-[57.6px] font-normal">
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
          <IconButton title="Previous">
            <PreviousIcon />
          </IconButton>
        </button>

        <button
          type="button"
          title="Next"
          className="z-0 mx-2"
          onClick={nextSlide}
        >
          <IconButton title="Next">
            <NextIcon />
          </IconButton>
        </button>
      </div>
    </div>
  );
}
