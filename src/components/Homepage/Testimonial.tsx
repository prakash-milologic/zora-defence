"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import TestimonialDesc from './TestimonialDesc';

const Testimonial = () => {
    return (
        <div className="px-6 md:px-[104px] py-[120px]">
         <p className="text-sm text-secondary-500 font-bold">CLIENTS STORIES</p>
      <p className="text-[64px] font-medium w-2/3 mt-6 mb-14">
      What Our Clients Have<br/>
      to Say About Us 
      </p>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
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

export default Testimonial