"use client";

import Image from "next/image";
import logo from "@/images/footer_logo.png";
import Link from "next/link";
import { Typography } from "@mui/material";

const navLinks = [
  { id: 1, title: "home", href: "/" },
  { id: 2, title: "blog", href: "/blog" },
  { id: 3, title: "concerns", href: "/concerns" },
  { id: 4, title: "treatments", href: "/treatments" },
  { id: 5, title: "shop", href: "/shop" },
  { id: 6, title: "locate us", href: "/locate-us" },
];

export default function TheFooterComponent() {
  return (
    <div className="p-4 h-auto w-full text-white bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2">
        <div className="flex flex-col  justify-start items-start">
          <Image src={logo} alt="logo" className="w-[364px] h-[94px]"></Image>
          <div className="mt-10">
            <div className="flex justify-start items-center">
              {navLinks.length > 0 &&
                navLinks.slice(0, 3).map((link) => {
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="text-[#ffffff] w-[315px] h-[77px]"
                    >
                      <Typography variant="body1" className="capitalize">
                        {link.title} {"/"}
                      </Typography>
                    </Link>
                  );
                })}
            </div>
            <div className="flex justify-start items-center">
              {navLinks.length > 0 &&
                navLinks.slice(3, 6).map((link) => {
                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      className="text-[#ffffff] w-[315px] h-[77px]"
                    >
                      <Typography variant="body1" className="capitalize">
                        {link.title} {"/"}
                      </Typography>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="md:flex flex-col justify-start items-center"></div>

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-3">
          <div></div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <p>Copyright © 2024. All Right Reserved.</p>
      </div>
    </div>
  );
}
