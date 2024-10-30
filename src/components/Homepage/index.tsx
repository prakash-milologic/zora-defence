"use client";
import React from "react";
import Hero from "./Hero";
import About from "./About";
import Testimonial from "./Testimonial";
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
        <About />
      <div className="fade-in">
        <FeatureCommonCount featureItems={countItem} />
      </div>
        <Services />
        <Testimonial />
    </>
  );
};

export default Home;
