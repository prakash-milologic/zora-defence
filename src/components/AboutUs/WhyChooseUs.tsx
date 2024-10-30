import { features } from "@/Constant/whyChooseUsData";

import {  Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  subsets: ["latin"],
});

const WhyChooseUs = () => {
  return (
    <div className="bg-[#0F0F0F] lg:py-12 py-10 px-6 lg:px-0">
      <div className="flex flex-col justify-center items-center gap-5 mt-6 mb-12">
        <h2 className={`md:text-left text-[#A58441] font-bold text-sm ${openSans.className}`}>
          WHY CHOOSE US
        </h2>
        <h1 className="lg:text-[88px] text-3xl font-medium lg:leading-[88px] mb-4">What Sets Us Apart</h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#171717] lg:p-6 p-4 flex lg:gap-10 gap-4 rounded-lg shadow-lg "
          >
            <div className=" mb-4 text-[#A58441] ">
              <div className="lg:h-[60px] lg:w-[60px] h-14 w-14 flex justify-center items-center bg-[#A5844126]">
                {feature.icon}
              </div>
            </div>
            <div className={`flex flex-col lg:gap-2 gap-1 {openSans.className}`}>
              <h3 className="lg:text-2xl text-xl leading-[32.68px] font-semibold">{feature.title}</h3>
              <p  className={`text-base text-white/80 opacity-80  font-[340] ${openSans.className}`}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
