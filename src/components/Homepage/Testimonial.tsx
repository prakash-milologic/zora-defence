"use client";
import React from "react";
import { Swiper, SwiperSlide, } from "swiper/react";
import {Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TestimonialDesc from "./TestimonialDesc";

const Testimonial = () => {
  return (
    <div className="px-6 lg:px-[104px] py-[120px]">
      <p className="text-sm text-secondary-500 font-bold">CLIENTS STORIES</p>
      <p className="lg:text-[64px] text-3xl font-medium lg:w-2/3 pr-20 mt-6 mb-14 lg:leading-[80px]">
        What Our Clients Have
        <br />
        to Say About Us
      </p>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            rewind = {true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            modules={[Autoplay,Navigation, Pagination]}
            className="mySwiper"
            breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                },
                '@0.75': {
                  slidesPerView: 2,
                },
                '@1.00': {
                  slidesPerView: 2,
                },
                '@1.50': {
                  slidesPerView: 3,
                },
              }}
        >
            <SwiperSlide>
             <TestimonialDesc />
            </SwiperSlide>
            <SwiperSlide><TestimonialDesc /></SwiperSlide>
            <SwiperSlide><TestimonialDesc /></SwiperSlide>
            <SwiperSlide><TestimonialDesc /></SwiperSlide>
        </Swiper>
        </div>
    )
}

export default Testimonial;
