"use client";
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
import Services from "./Services";
import FeatureCommonCount from "../Common/FeatureCommonCount";
import { countItem } from "@/constants/option";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const Home = () => {
  useIntersectionObserver({
    targetClass: "fade-in",
    toggleClass: "visible",
  });
  return (
    <>
      <Hero />
      <div className="fade-in">
        <About />
      </div>
      <div className="fade-in">
        <FeatureCommonCount featureItems={countItem} />
      </div>
      <div className="fade-in">
        <Services />
      </div>
      <div className="fade-in">
        <Testimonial />
      </div>
      <ContactUs />
    </>
  );
};

export default Home;
