"use client";
import React from "react";
import { Open_Sans } from "next/font/google";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const openSans = Open_Sans({
  subsets: ["latin"],
});


const HeroTemplate = ({
  pageName,
  title,
  description,
}: {
  pageName: string;
  title: string;
  description: string;
}) => {
  useIntersectionObserver({
    targetClass: "fade-in",
    toggleClass: "visible",
  });

  return (
    <div
      className="lg:py-[120px] lg:pb-10 md:py-10 py-6 bg-gradient-to-r 
               from-[#0F0F0F] via-[#0F0F0F] to-[#222222]"
    >
      <h2 className={`text-center text-[#A58441] font-bold text-sm mb-6 ${openSans.className} fade-in`}>
        {pageName}
      </h2>
      <div className="text-center lg:pb-[72px] md:pb-10 pb-5">
        <h1 className="lg:text-7xl text-3xl font-medium fade-in">{title}</h1>
        <h6
          className={`lg:text-xl text-sm text-white/80 mt-4 font-[340] fade-in ${openSans.className}`}
        >
          {description}
        </h6>
      </div>
    </div>
  );
};

export default HeroTemplate;
