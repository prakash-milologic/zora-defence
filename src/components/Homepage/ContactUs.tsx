import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const ContactUs = () => {
  return (
    <div className="px-6 lg:px-[104px] text-center">
      <div className="lg:pt-[120px] lg:pb-14 py-10 border-b-[0.5px] border-white">
        <p
          className={`text-sm text-primary-500 font-bold uppercase tracking-widest ${openSans.className}`}
        >
          here to protect you
        </p>
        <p className="lg:w-2/3 m-auto mt-6 lg:text-[80px] text-3xl lg:leading-[80px]">
          Our Protection is always there 24 hours.
        </p>
        <button className={`lg:text-base text-xs bg-primary-500 font-bold lg:w-[220px] w-[180px] lg:py-5 py-2.5 lg:mt-10 mt-8 uppercase tracking-wider ${openSans.className}`}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
