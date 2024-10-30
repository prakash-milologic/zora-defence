"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Lora, Open_Sans } from "next/font/google";
import Link from "next/link";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const lora = Lora({
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
});

interface Props {
  src: StaticImageData;
  alt: string;
  heading?: string;
  title: string;
  desc1: string;
  desc2?: string;
  isreversible?: boolean;
  list?: string[];
  itemTop?: boolean;
}

const ContentAndImageSection = ({
  src,
  alt,
  heading,
  title,
  desc1,
  desc2 = "",
  isreversible,
  list = [],
  itemTop,
}: Props) => {

  useIntersectionObserver({
    targetClass: "fade-in",
    toggleClass: "visible",
  });

  return (
    <div
      className={` ${
        isreversible ? "bg-[#000000]" : "bg-[#0F0F0F]"
      }  lg:py-28 py-10 px-6 lg:px-[104px] overflow-hidden fade-in ${
        openSans.className
      }`}
    >
      {heading && (
        <h2 className="mb-6 md:text-left text-[#A58441] font-bold text-base lg:hidden">
          {heading}
        </h2>
      )}

      <div
        className={`flex ${itemTop ? "items-start" : "items-center"} ${
          isreversible
            ? "flex-col-reverse md:flex-row-reverse"
            : "flex-col md:flex-row"
        } gap-16  max-w-8xl`}
      >
        <div className="w-full md:w-1/3 overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={400}
            height={400}
            className="transform hover:scale-110 transition-transform ease-in-out duration-300"
          />
        </div>
        <div className="w-full md:w-2/3 lg:text-base text-sm text-white/80 font-[340] ">
          {heading && (
            <h2 className="mb-6 md:text-left text-[#A58441] font-bold text-base lg:block hidden">
              {heading}
            </h2>
          )}

          <h1
            className={`lg:text-[64px] text-4xl font-medium lg:pr-16 lg:leading-[72px] ${lora.className}`}
          >
            {title}
          </h1>

          <h6 className=" lg:mt-4 mt-2 lg:pr-40">{desc1}</h6>
          {list.length > 0 && (
            <ul className="list-disc list-inside lg:mt-6 mt-3">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <h6 className="lg:mt-6 mt-3 lg:pr-36">{desc2}</h6>

          <div className="lg:mt-10 mt-5">
            <Link
              href={"/contact-us"}
              type="button"
              className="font-bold bg-[#A58441] px-5 py-2.5 text-center me-2 mb-2"
            >
              Contact US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAndImageSection;
