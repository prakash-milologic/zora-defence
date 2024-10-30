import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const ContactForm = () => {
  return (
    <>
      <div className="bg-[#0F0F0F] lg:p-24 md:p-12 p-5 lg:flex flex-col justify-center items-center">
        <div className="lg:flex w-full">
          <div className="lg:w-1/2 bg-[#1A1A1A] lg:block hidden"></div>
          <div className="lg:w-1/2 bg-transparent p-6 flex gap-4 flex-col">
            <h2
              className={`text-primary-500 font-bold text-sm ${openSans.className}`}
            >
              CONTACT US
            </h2>
            <h1 className="lg:text-[64px] text-3xl font-medium mt-6">
              Contact Us
            </h1>

            <form className={`mt-6 ${openSans.className}`}>
              <div className="grid gap-10 mb-6 md:grid-cols-2 text-base font-[340] ">
                <div className="md:col-span-1">
                  <input
                    type="text"
                    id="first_name"
                    className="bg-transparent border-b-[0.5px] focus:outline-none w-full p-2.5"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="md:col-span-1">
                  <input
                    type="text"
                    id="last_name"
                    className="bg-transparent border-b-[0.5px] focus:outline-none w-full p-2.5"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="email"
                    id="email"
                    className="bg-transparent border-b-[0.5px] focus:outline-none  w-full p-2.5"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    id="email"
                    className="bg-transparent border-b-[0.5px] focus:outline-none w-full p-2.5"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    id="email"
                    className="bg-transparent border-b-[0.5px] focus:outline-none w-full p-2.5"
                    placeholder="Message"
                    required
                  />
                </div>
              </div>
              <button
                type="button"
                className="w-full font-bold bg-[#A58441] py-5 text-center lg:mt-14 mt-8 uppercase tracking-wider"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
