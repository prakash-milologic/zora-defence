"use client";
import React from "react";
import hero from "@/assets/images/hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import "./homepage.style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full lg:h-[47rem] h-[38rem] relative bg-no-repeat bg-cover z-0 rounded-xl overflow-hidden bg-gradient-to-r from-white/0 to-black">
            <div className="absolute w-full h-full">
              <div className="absolute w-full h-full bg-gradient-to-r from-black from-10% to-white/0"></div>
              <Image src={hero} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative lg:top-[20%] top-[30%] lg:left-[104px] left-5  w-full h-full z-10 ">
              <h1 className="lg:text-[88px] md:text-5xl text-3xl font-medium lg:leading-[88px] mb-4">
                We Secure What <br /> Matters Most
              </h1>
              <h6
                className={`lg:text-xl text-sm text-white/80 font-[340] lg:pr-0 pr-12 ${openSans.className}`}
              >
                Expert security professionals ensuring reliable protection
                through <br /> manned guarding, static security, and close
                protection services.
              </h6>
              <button
                type="button"
                className="lg:w-[220px] w-[180px] font-bold bg-[#A58441] lg:text-base text-xs py-2.5 text-center me-2 mb-2 mt-10"
              >
                EXPLORE SERVICES
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[47rem] h-[38rem] relative bg-no-repeat bg-cover z-0 rounded-xl overflow-hidden bg-gradient-to-r from-white/0 to-black">
            <div className="absolute w-full h-full">
              <div className="absolute w-full h-full bg-gradient-to-r from-black from-10% to-white/0"></div>
              <Image src={hero} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative lg:top-[20%] top-[30%] lg:left-[104px] left-5  w-full h-full z-10 ">
              <h1 className="lg:text-[88px] md:text-5xl text-3xl font-medium lg:leading-[88px] mb-4">
                We Secure What <br /> Matters Most
              </h1>
              <h6
                className={`lg:text-xl text-sm text-white/80 font-[340] lg:pr-0 pr-12 ${openSans.className}`}
              >
                Expert security professionals ensuring reliable protection
                through <br /> manned guarding, static security, and close
                protection services.
              </h6>
              <button
                type="button"
                className="lg:w-[220px] w-[180px] font-bold bg-[#A58441] lg:text-base text-xs py-2.5 text-center me-2 mb-2 mt-10"
              >
                EXPLORE SERVICES
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[47rem] h-[38rem] relative bg-no-repeat bg-cover z-0 rounded-xl overflow-hidden bg-gradient-to-r from-white/0 to-black">
            <div className="absolute w-full h-full">
              <div className="absolute w-full h-full bg-gradient-to-r from-black from-10% to-white/0"></div>
              <Image src={hero} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative lg:top-[20%] top-[30%] lg:left-[104px] left-5  w-full h-full z-10 ">
              <h1 className="lg:text-[88px] md:text-5xl text-3xl font-medium lg:leading-[88px] mb-4">
                We Secure What <br /> Matters Most
              </h1>
              <h6
                className={`lg:text-xl text-sm text-white/80 font-[340] lg:pr-0 pr-12 ${openSans.className}`}
              >
                Expert security professionals ensuring reliable protection
                through <br /> manned guarding, static security, and close
                protection services.
              </h6>
              <button
                type="button"
                className="lg:w-[220px] w-[180px] font-bold bg-[#A58441] lg:text-base text-xs py-2.5 text-center me-2 mb-2 mt-10"
              >
                EXPLORE SERVICES
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[47rem] h-[38rem] relative bg-no-repeat bg-cover z-0 rounded-xl overflow-hidden bg-gradient-to-r from-white/0 to-black">
            <div className="absolute w-full h-full">
              <div className="absolute w-full h-full bg-gradient-to-r from-black from-10% to-white/0"></div>
              <Image src={hero} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative lg:top-[20%] top-[30%] lg:left-[104px] left-5  w-full h-full z-10 ">
              <h1 className="lg:text-[88px] md:text-5xl text-3xl font-medium lg:leading-[88px] mb-4">
                We Secure What <br /> Matters Most
              </h1>
              <h6
                className={`lg:text-xl text-sm text-white/80 font-[340] lg:pr-0 pr-12 ${openSans.className}`}
              >
                Expert security professionals ensuring reliable protection
                through <br /> manned guarding, static security, and close
                protection services.
              </h6>
              <button
                type="button"
                className="lg:w-[220px] w-[180px] font-bold bg-[#A58441] lg:text-base text-xs py-2.5 text-center me-2 mb-2 mt-10"
              >
                EXPLORE SERVICES
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[47rem] h-[38rem] relative bg-no-repeat bg-cover z-0 rounded-xl overflow-hidden bg-gradient-to-r from-white/0 to-black">
            <div className="absolute w-full h-full">
              <div className="absolute w-full h-full bg-gradient-to-r from-black from-10% to-white/0"></div>
              <Image src={hero} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative lg:top-[20%] top-[30%] lg:left-[104px] left-5  w-full h-full z-10 ">
              <h1 className="lg:text-[88px] md:text-5xl text-3xl font-medium lg:leading-[88px] mb-4">
                We Secure What <br /> Matters Most
              </h1>
              <h6
                className={`lg:text-xl text-sm text-white/80 font-[340] lg:pr-0 pr-12 ${openSans.className}`}
              >
                Expert security professionals ensuring reliable protection
                through <br /> manned guarding, static security, and close
                protection services.
              </h6>
              <button
                type="button"
                className="lg:w-[220px] w-[180px] font-bold bg-[#A58441] lg:text-base text-xs py-2.5 text-center me-2 mb-2 mt-10"
              >
                EXPLORE SERVICES
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
