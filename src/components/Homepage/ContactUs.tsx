import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const ContactUs = () => {
  return (
    <div className="px-6 md:px-[104px] text-center">
      <div className="pt-[120px] pb-14 border-b-[0.5px] border-white">
        <p
          className={`text-sm text-primary-500 font-bold uppercase tracking-widest ${openSans.className}`}
        >
          here to protect you
        </p>
        <p className="w-2/3 m-auto mt-6 text-[80px]">
          Our Protection is always there 24 hours.
        </p>
        <button className={`bg-primary-500 font-bold w-[220px] py-5 mt-10 uppercase tracking-wider ${openSans.className}`}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
