import React from "react";
import {  Open_Sans } from "next/font/google";


const openSans = Open_Sans({
  subsets: ["latin"],
  style:"normal"
});


const FeatureCommonCount = ({
  featureItems,
}: {
  featureItems: { count: string; title: string }[];
}) => {
  return (
    <div className="bg-[#000000] lg:py-12 py-10 lg:px-0 px-2 lg:my-12 my-10">
      <div className="flex justify-center text-center lg:gap-24 gap-2">
        {featureItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border-[0.5px] border-primary-500 lg:p-7 p-4"
          >
            <h1 className="lg:text-7xl text-2xl font-medium">{item.count}</h1>
            <p className={`${openSans.className} text-xs text-white/80 font-[340]`}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCommonCount;
