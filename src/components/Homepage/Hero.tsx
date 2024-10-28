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

const Hero = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        // rewind = {true}
        loop={true}
        // effect={'fade'}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        //   navigation={true}
        //   pagination={{
        //     clickable: true,
        //   }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full lg:h-[47rem] h-[38rem] relative bg-no-repeat bg-cover  z-0 rounded-xl overflow-hidden bg-gradient-to-r from-white/0 to-black">
            <div className="absolute w-full h-full">
              <div className="absolute w-full h-full bg-gradient-to-r from-black from-10% to-white/0"></div>
              <Image src={hero} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative top-[30%] lg:left-[13%] left-5  w-full h-full z-10  flex  flex-col gap-5 ">
              <h1 className="lg:text-7xl text-4xl font-medium ">
                We Secure What <br /> Matters Most
              </h1>
              <h6 className="lg:text-base text-sm opacity-80 font-normal lg:pr-0 pr-12">
                Expert security professionals ensuring reliable protection
                through <br /> manned guarding, static security, and close
                protection services.
              </h6>
              <button
                type="button"
                className="lg:w-[220px] w-[180px] font-bold bg-[#A58441] lg:text-base text-xs py-2.5 text-center me-2 mb-2"
              >
                EXPLORE SERVICES
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[47rem] h-[38rem] relative bg-no-repeat bg-cover  z-0 rounded-xl overflow-hidden bg-gradient-to-r from-white/0 to-black">
            <div className="absolute w-full h-full">
              <div className="absolute w-full h-full bg-gradient-to-r from-black from-10% to-white/0"></div>
              <Image src={hero} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative top-[30%] lg:left-[13%] left-5  w-full h-full z-10  flex  flex-col gap-5 ">
              <h1 className="lg:text-7xl text-4xl font-medium ">
                We Secure What <br /> Matters Most
              </h1>
              <h6 className="lg:text-base text-sm opacity-80 font-normal lg:pr-0 pr-12">
                Expert security professionals ensuring reliable protection
                through <br /> manned guarding, static security, and close
                protection services.
              </h6>
              <button
                type="button"
                className="lg:w-[220px] w-[180px] font-bold bg-[#A58441] lg:text-base text-xs py-2.5 text-center me-2 mb-2"
              >
                EXPLORE SERVICES
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[47rem] h-[38rem] relative bg-no-repeat bg-cover  z-0 rounded-xl overflow-hidden bg-gradient-to-r from-white/0 to-black">
            <div className="absolute w-full h-full">
              <div className="absolute w-full h-full bg-gradient-to-r from-black from-10% to-white/0"></div>
              <Image src={hero} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative top-[30%] lg:left-[13%] left-5  w-full h-full z-10  flex  flex-col gap-5 ">
              <h1 className="lg:text-7xl text-4xl font-medium ">
                We Secure What <br /> Matters Most
              </h1>
              <h6 className="lg:text-base text-sm opacity-80 font-normal lg:pr-0 pr-12">
                Expert security professionals ensuring reliable protection
                through <br /> manned guarding, static security, and close
                protection services.
              </h6>
              <button
                type="button"
                className="lg:w-[220px] w-[180px] font-bold bg-[#A58441] lg:text-base text-xs py-2.5 text-center me-2 mb-2"
              >
                EXPLORE SERVICES
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[47rem] h-[38rem] relative bg-no-repeat bg-cover  z-0 rounded-xl overflow-hidden bg-gradient-to-r from-white/0 to-black">
            <div className="absolute w-full h-full">
              <div className="absolute w-full h-full bg-gradient-to-r from-black from-10% to-white/0"></div>
              <Image src={hero} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative top-[30%] lg:left-[13%] left-5  w-full h-full z-10  flex  flex-col gap-5 ">
              <h1 className="lg:text-7xl text-4xl font-medium ">
                We Secure What <br /> Matters Most
              </h1>
              <h6 className="lg:text-base text-sm opacity-80 font-normal lg:pr-0 pr-12">
                Expert security professionals ensuring reliable protection
                through <br /> manned guarding, static security, and close
                protection services.
              </h6>
              <button
                type="button"
                className="lg:w-[220px] w-[180px] font-bold bg-[#A58441] lg:text-base text-xs py-2.5 text-center me-2 mb-2"
              >
                EXPLORE SERVICES
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full lg:h-[47rem] h-[38rem] relative bg-no-repeat bg-cover  z-0 rounded-xl overflow-hidden bg-gradient-to-r from-white/0 to-black">
            <div className="absolute w-full h-full">
              <div className="absolute w-full h-full bg-gradient-to-r from-black from-10% to-white/0"></div>
              <Image src={hero} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative top-[30%] lg:left-[13%] left-5  w-full h-full z-10  flex  flex-col gap-5 ">
              <h1 className="lg:text-7xl text-4xl font-medium ">
                We Secure What <br /> Matters Most
              </h1>
              <h6 className="lg:text-base text-sm opacity-80 font-normal lg:pr-0 pr-12">
                Expert security professionals ensuring reliable protection
                through <br /> manned guarding, static security, and close
                protection services.
              </h6>
              <button
                type="button"
                className="lg:w-[220px] w-[180px] font-bold bg-[#A58441] lg:text-base text-xs py-2.5 text-center me-2 mb-2"
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
