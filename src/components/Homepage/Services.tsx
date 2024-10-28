import React from "react";
import Image from "next/image";
import mainImg from "@/assets/images/services-image-main.png";
import surveillance from "@/assets/images/services-image-surveillance.png";
import security from "@/assets/images/services-image-security.png";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const Services = () => {
  return (
    <div className="px-6 md:px-[104px] lg:py-[120px] py-10">
      <p className="text-sm text-secondary-500 font-bold uppercase">our services</p>
      <p className="lg:text-[64px] text-3xl font-medium lg:w-2/3 mt-6 mb-6 lg:mb-14">
        A Unique, Executive, Tailor Made Security Service.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="col-span-1 relative">
          <Image
            src={mainImg}
            alt="services-image-main"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 pt-32 pb-8 lg:px-8 px-3 bg-gradient-to-b from-white/0 from-0% to-40% to-[#0F0F0F]">
            <p className="lg:text-4xl text-2xl font-bold">Close Protection</p>
            <p className={`w-3/4 lg:text-base text-xs lg:mt-3 mt-2 font-[340] text-white/80 ${openSans.className}`}>
              Zora Defence can provide any number of Security Stewards to manage
              your occasion.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-8">
          <div className="h-[384px] relative">
            <Image
              src={surveillance}
              alt="services-image-main"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 pt-32 pb-8 lg:px-8 px-3 bg-gradient-to-b from-white/0 from-0% to-70% to-[#0F0F0F]">
              <p className="lg:text-4xl text-2xl font-bold">
                Investigations & Surveillance
              </p>
              <p className={`w-3/4 lg:text-base text-xs lg:mt-3 mt-2 font-[340] text-white/80 ${openSans.className}`}>
                Zora Defence can provide any number of Security Stewards to
                manage your occasion.
              </p>
            </div>
          </div>
          <div className="h-[384px] relative">
            <Image
              src={security}
              alt="services-image-main"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 pt-32 pb-8 lg:px-8 px-3 bg-gradient-to-b from-white/0 from-0% to-70% to-[#0F0F0F]">
              <p className="lg:text-4xl text-2xl font-bold">Event Security</p>
              <p className={`w-3/4 lg:text-base text-xs lg:mt-3 mt-2 font-[340] text-white/80 ${openSans.className}`}>
                Zora Defence can provide any number of Security Stewards to
                manage your occasion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
