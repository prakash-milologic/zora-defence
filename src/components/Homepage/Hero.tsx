"use client";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./homepage.style.css";
// Import Swiper styles
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroCarousel from "./HeroCarousel";



const Hero = () => {
  useIntersectionObserver({
    targetClass: "fade-in",
    toggleClass: "visible",
  });
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
       <HeroCarousel />
        </SwiperSlide>
        <SwiperSlide>
       <HeroCarousel />
        </SwiperSlide>
        <SwiperSlide>
       <HeroCarousel />
        </SwiperSlide>
        <SwiperSlide>
       <HeroCarousel />
        </SwiperSlide>
        <SwiperSlide>
       <HeroCarousel />
        </SwiperSlide>
      
      </Swiper>
    </>
  );
};

export default Hero;
