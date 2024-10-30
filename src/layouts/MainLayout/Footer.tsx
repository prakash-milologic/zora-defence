"use client";
import logo from "@/assets/images/logo.png";
import ContactUs from "@/components/Homepage/ContactUs";
import { services, socialLinks } from "@/constants/option";
import { ISocialLinks } from "@/constants/types";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { mainMenuItems } from "./menuItems";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
  <ContactUs />
    <div className={`pt-20 px-6 lg:px-[104px] ${openSans.className}`}>
      <div className="flex justify-between">
        <div className="md:w-1/4 md:block hidden">
          <div className="lg:w-[180px] lg:h-[120px] w-24 overflow-hidden">
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
          <p className="lg:text-base text-xs font-[340] text-white/80 mt-8 pr-6">
            We provide 24/7 professional security services, ensuring the safety
            of your people, property.
          </p>
        </div>
        <div className="md:w-1/5">
          <p className="lg:text-2xl">Quick Links</p>
          <ul className="lg:mt-8 mt-4">
            {mainMenuItems.map((item, index) => (
              <li key={index} className="lg:text-base text-xs lg:mt-2.5 mt-2 font-[340] text-white/80">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/5">
          <p className="lg:text-2xl">Our Services</p>
          <ul className="lg:mt-8 mt-4">
            {services.map((item, index) => (
              <li key={index} className="lg:text-base text-xs lg:mt-2.5 mt-2 font-[340] text-white/80">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/5 hidden md:block">
          <p className="lg:text-2xl text-base">Get In Touch</p>
          <ul className="lg:mt-8 mt-4">
            {socialLinks.map((item: ISocialLinks) => (
              <li key={item.name} className="lg:text-base text-xs lg:mt-2.5 mt-2 font-[340] text-white/80">
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
      <div className="md:hidden mt-8">
          <p className="text-base">Get In Touch</p>
          <ul className="mt-4">
            {socialLinks.map((item: ISocialLinks) => (
              <li key={item.name} className="text-xs mt-2 font-[340] text-white/80">
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
      <div className="lg:mt-[188px] my-6 md:my-10 text-center">
        <p className="text-sm text-white/55"> &copy; COPYRIGHT, {date} - Zora Defence</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
