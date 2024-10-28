import React from "react";
import hero from "@/assets/images/hero.png";
import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const AboutUsHero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-center items-center lg:gap-24 gap-8 bg-[#0F0F0F] mt-[-30px]">
        <div className="lg:w-2/3">
        <Image src={hero} alt="about" width={600} height={600} className="w-full h-full lg:-mt-10"/>
        </div>
        <div className="items-center flex flex-col gap-3 text-center justify-center">
          <BiSolidQuoteAltLeft className="text-6xl  text-[#A58441]" />
          <p
            style={{ fontFamily: "open" }}
            className="lg:w-1/2 m-auto lg:px-16 px-5 lg:text-2xl opacity-80 font-light"
          >
            At Zora, we stand for more than just security—we stand for trust,
            reliability, and peace of mind. With a team of seasoned
            professionals, we provide tailored solutions in manned guarding,
            static security, and close protection services. Our mission is to
            safeguard what matters most, ensuring our clients feel secure in
            every situation, whether personal, corporate, or event-related. At
            Zora, your safety is not just a job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
