"use client";

import React from "react";
import Link from "next/link";
import { Button, Typography } from "@mui/material";
import logo from "@/images/logo.png";
import Image from "next/image";
import CloseIcon from "../assets/icons/CloseIcon";
import MenuIcon from "../assets/icons/MenuIcon";

const TheHeaderComponent = () => {
  const [navigation, setNavigation] = React.useState(false);

  const handleNavigation = () => {
    setNavigation(!navigation);
  };

  const navLinks = [
    { id: 1, title: "home", href: "/" },
    { id: 2, title: "blog", href: "/blog" },
    { id: 3, title: "concerns", href: "/concerns" },
    { id: 4, title: "treatments", href: "/treatments" },
    { id: 5, title: "shop", href: "/shop" },
    { id: 6, title: "locate us", href: "/locate-us" },
  ];

  return (
    <nav className="w-full h-[100px] px-[64px] fixed top-0 left-0 z-30 bg-white shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-[197.83px] h-[50px]"
          ></Image>
        </div>
        <div className="z-50 flex items-center" onClick={handleNavigation}>
          {navigation ? (
            <div className="w-[35.36px] h-[85.71px] hover:opacity-80 cursor-pointer z-50">
              <CloseIcon />
            </div>
          ) : (
            <div className="w-[35.36px] h-[85.71px] hover:opacity-80 cursor-pointer z-50">
              <MenuIcon />
            </div>
          )}
        </div>
        <div>
          {navigation ? (
            <Button className="px-6 py-3 bg-[#7D614B] text-white capitalize rounded-[100px]">
              book now
            </Button>
          ) : (
            <Button className="px-6 py-3 bg-black text-white capitalize rounded-[100px]">
              book now
            </Button>
          )}
        </div>
      </div>

      {/* Handle the menu icon */}
      <div
        className={
          navigation
            ? "block absolute top-[100px] right-0 left-0 bottom-0 bg-[#F4F4F4] w-full h-[692px] ease-in duration-300"
            : "block absolute top-[100px] right-0 left-[-100%] bottom-0 bg-[#F4F4F4] w-full h-[692px] ease-in duration-300"
        }
      >
        <div className="grid grid-cols-2 md:grid-cols-5 w-[669px] h-[295px]">
          <div className="flex flex-col px-[64px] py-[32px]">
            {navLinks.length > 0 &&
              navLinks.slice(0, 3).map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-[#7D614B] w-[315px] h-[77px]"
                  >
                    <Typography
                      variant="body1"
                      className="capitalize font-semibold"
                    >
                      {link.title}
                    </Typography>
                  </Link>
                );
              })}
          </div>
          <div className="flex flex-col px-[64px] py-[32px]">
            {navLinks.length > 0 &&
              navLinks.slice(3, 6).map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-[#7D614B] w-[315px] h-[77px] "
                  >
                    <Typography
                      variant="body1"
                      className="capitalize font-semibold"
                    >
                      {link.title}
                    </Typography>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TheHeaderComponent;
