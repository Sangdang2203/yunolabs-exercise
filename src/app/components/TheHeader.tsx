"use client";

import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";
import logo from "@/images/logo.png";
import Image from "next/image";
import CloseIcon from "../assets/icons/CloseIcon";
import MenuIcon from "../assets/icons/MenuIcon";
import { navLinks } from "../assets/data";
import FacebookIcon from "../assets/icons/Facebook";
import InstagramIcon from "../assets/icons/Instagram";
import TiktokIcon from "../assets/icons/TikTok";
import YoutubeIcon from "../assets/icons/Youtube";

const TheHeaderComponent = () => {
  const [navigation, setNavigation] = React.useState(false);

  const handleNavigation = () => {
    setNavigation(!navigation);
  };

  const closeNavigation = () => {
    setNavigation(false);
  };

  return (
    <nav className="w-full h-[100px] px-3 md:px-[64px] fixed top-0 left-0 z-30 bg-white shadow-lg">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" className="w-[197.83px] h-[50px]" />
        </Link>
        <div
          className="block z-50 md:flex items-center"
          onClick={handleNavigation}
        >
          <div className="block w-[35.36px] h-[85.71px] hover:opacity-80 cursor-pointer z-50">
            {navigation ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
        <div className="hidden md:block">
          <button
            type="button"
            className={`px-6 py-3 ${
              navigation ? "bg-[#7D614B]" : "bg-black"
            } text-white capitalize rounded-[100px]`}
          >
            book now
          </button>
        </div>
      </div>

      <div
        className={`absolute top-[100px] right-0 left-0 bottom-0 bg-[#F4F4F4] w-full min-h-screen ease-in duration-300 ${
          navigation ? "block" : "hidden"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-5 max-w-[669px] h-[295px]">
          <div className="flex flex-col px-[64px] py-[32px]">
            {navLinks.length > 0 &&
              navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-[#7D614B] w-[315px] h-[77px]"
                  onClick={closeNavigation}
                >
                  <Typography
                    variant="body1"
                    className="capitalize font-semibold"
                  >
                    {link.title}
                  </Typography>
                </Link>
              ))}
          </div>
          <div className="flex flex-col px-[64px] py-[32px]">
            {navLinks.length > 0 &&
              navLinks.slice(3, 6).map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-[#7D614B] w-[315px] h-[77px]"
                  onClick={closeNavigation}
                >
                  <Typography
                    variant="body1"
                    className="capitalize font-semibold"
                  >
                    {link.title}
                  </Typography>
                </Link>
              ))}
          </div>
        </div>
        <div className="w-full fixed flex justify-end items-end bottom-0 right-0 bg-white py-2">
          <Link href="" className="mx-2">
            <FacebookIcon />
          </Link>
          <Link href="" className="mx-2">
            <InstagramIcon />
          </Link>
          <Link href="" className="mx-2">
            <TiktokIcon />
          </Link>
          <Link href="" className="mx-2">
            <YoutubeIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TheHeaderComponent;
