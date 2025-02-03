"use client";

import Image from "next/image";
import logo from "@/images/footer_logo.png";
import Link from "next/link";
import { navLinks } from "../assets/data";
import UpIcon from "../assets/icons/UpIcon";
import FacebookIcon from "../assets/icons/Facebook";
import TiktokIcon from "../assets/icons/TikTok";
import YoutubeIcon from "../assets/icons/Youtube";
import InstagramIcon from "../assets/icons/Instagram";

export default function TheFooterComponent() {
  return (
    <div className="px-[64px] py-[60px] h-auto w-full text-white bg-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2">
        <div className=" w-[454.45px] h-[248px]">
          <Image src={logo} alt="logo" className="w-[364px] h-[94px]"></Image>
          <div className="mt-10">
            {navLinks.length > 0 &&
              navLinks.map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-[#ffffff] w-[315px] h-[77px] capitalize text-[32px]"
                  >
                    {""} {link.title} {"/"}
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-[164px] h-[29px]">
            <div>
              <p className="uppercase">Contact us</p>
              <Link
                href="tel:+02 8006 3344"
                className="leadind-[28.8px] text-[24px] font-medium"
              >
                +02 8006 3344
              </Link>
            </div>
            <div className="mt-10">
              <p className="uppercase">Email</p>
              <Link
                href="mailto:robert@cosmedixclinics.com.au"
                className="leadind-[28.8px] text-[24px] font-medium"
              >
                robert@cosmedixclinics.com.au
              </Link>
            </div>
          </div>
          <div className="w-[164px] h-[29px]">
            <div>
              <p className="uppercase">address</p>
              <Link href="mailto:robert@cosmedixclinics.com.au">
                169 William Street - Darlinghurst Sydney, NSW
              </Link>
            </div>
            <div className="mt-10">
              <p className="uppercase">Opening hours</p>
              <p className="leadind-[28.8px] text-[24px] font-medium">
                9am—6pm
              </p>
            </div>
            <div className="flex justify-between items-center">
              <FacebookIcon />
              <InstagramIcon />
              <TiktokIcon />
              <YoutubeIcon />
            </div>
          </div>
          <div className="" title="Go to top">
            <UpIcon />
            <p className="leading-[13px] text-[10px] text-[#FBF8F3]">
              © 2024 — Copyright
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
