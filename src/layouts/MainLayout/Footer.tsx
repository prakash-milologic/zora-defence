"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { mainMenuItems } from "./menuItems";
import { services, socialLinks } from "@/constants/option";
import { Open_Sans } from "next/font/google";
import { ISocialLinks } from "@/constants/types";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className={`pt-20 px-6 md:px-[104px] ${openSans.className}`}>
      <div className="flex justify-between">
        <div className="w-1/4 lg:block hidden">
          <div className="w-[180px] h-[120px] overflow-hidden">
            <Link href={"/"} className="w-full h-full">
              <Image
                priority
                src={logo}
                alt="logo"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          <p className="font-[340] text-white/80 mt-8 pr-6">
            We provide 24/7 professional security services, ensuring the safety
            of your people, property.
          </p>
        </div>
        <div className="lg:w-1/5">
          <p className="lg:text-2xl">Quick Links</p>
          <ul className="lg:mt-8 mt-4">
            {mainMenuItems.map((item, index) => (
              <li key={index} className="lg:text-base text-xs lg:mt-2.5 mt-2 font-[340] text-white/80">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/5">
          <p className="lg:text-2xl">Our Services</p>
          <ul className="lg:mt-8 mt-4">
            {services.map((item, index) => (
              <li key={index} className="lg:text-base text-xs lg:mt-2.5 mt-2 font-[340] text-white/80">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/5 hidden lg:block">
          <p className="text-2xl">Get In Touch</p>
          <ul className="mt-8">
            {socialLinks.map((item: ISocialLinks) => (
              <li key={item.name} className="text-base mt-2.5 font-[340] text-white/80">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-3"
                >
                  <span>{item.icon()}</span> <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:hidden mt-8">
          <p className="text-base">Get In Touch</p>
          <ul className="t-4">
            {socialLinks.map((item: ISocialLinks) => (
              <li key={item.name} className=" text-xs mt-2 font-[340] text-white/80">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2"
                >
                  <span>{item.icon()}</span> <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      <div className="lg:mt-[188px] my-6 lg:mb-8 text-center">
        <p className="text-sm text-white/55"> &copy; COPYRIGHT, {date} - Zora Defence</p>
      </div>
    </div>
  );
};

export default Footer;
