import React from "react";
import Hero from "./Hero";
import About from "./About";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
import Services from "./Services";
import FeatureCommonCount from "../Common/FeatureCommonCount";
import { countItem } from "@/constants/option";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeatureCommonCount featureItems={countItem} />
      <Services />
      <Testimonial />
      <ContactUs />
    </>
  );
};

export default Home;
