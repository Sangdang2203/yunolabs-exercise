"use client";

import Image from "next/image";
import logo from "@/images/footer_logo.png";
import Link from "next/link";
import { navLinks } from "../assets/data";
import UpIcon from "../assets/icons/UpIcon";
import TiktokIcon from "../assets/icons/TikTok";
import InstagramIcon from "../assets/icons/Instagram";
import YoutubeIconFooter from "../assets/icons/YoutubeFooter";
import FacebookIconFooter from "../assets/icons/FacebookFooter";
import Hotline from "./Hotline";

export default function TheFooterComponent() {
  return (
    <div className="px-[64px] py-[60px] h-auto w-full text-white bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2">
        <div className="max-w-[454.45px] max-h-[248px]">
          <Image src={logo} alt="logo" className="w-[364px] h-[94px]"></Image>
          <div className="hidden md:block mt-10">
            {navLinks.length > 0 &&
              navLinks.map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-[#ffffff] w-[315px] h-[77px] capitalize text-[18px] md:text-[32px]"
                  >
                    {""} {link.title} {"/"}
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 relative">
          <div className="max-w-[164px] max-h-[29px]">
            <div>
              <p className="uppercase">Contact us</p>
              <Link
                href="tel:+02 8006 3344"
                className="leadind-[28.8px] text-sm md:text-[18px] font-medium py-3"
              >
                +02 8006 3344
              </Link>
            </div>
            <div className="mt-10">
              <p className="uppercase">Email</p>
              <Link
                href="mailto:robert@cosmedixclinics.com.au"
                className="leadind-[28.8px] text-sm md:text-[18px] font-medium py-3"
              >
                robert@cosmedixclinics.com.au
              </Link>
            </div>
          </div>
          <div className="max-w-[164px] max-h-[29px]">
            <div>
              <p className="uppercase">address</p>
              <Link
                href="mailto:robert@cosmedixclinics.com.au"
                className="text-sm md:text-[18px]"
              >
                169 William Street - Darlinghurst Sydney, NSW
              </Link>
            </div>
            <div className="mt-10">
              <p className="uppercase">Opening hours</p>
              <p className="leadind-[28.8px] text-sm md:text-[18px] font-medium py-3">
                9am—6pm
              </p>
            </div>
            <div className="flex justify-between items-center mt-10">
              <Link href="">
                <FacebookIconFooter />
              </Link>
              <Link href="">
                <InstagramIcon />
              </Link>
              <Link href="">
                <TiktokIcon />
              </Link>
              <Link href="">
                <YoutubeIconFooter />
              </Link>
            </div>
          </div>
          <div
            className="absolute flex flex-col justify-between right-0 bottom-4 min-w-[113px] min-h-[248px]"
            title="Go to top"
          >
            <UpIcon />
            <div className="fixed right-2 bottom-2 z-50 md:hidden">
              <Hotline />
            </div>
            <p className="leading-[13px] text-[10px] text-[#FBF8F3] uppercase">
              © 2024 — Copyright
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
