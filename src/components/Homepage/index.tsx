import React from "react";
import Hero from "./Hero";
import About from "./About";
import FeatureCount from "./FeatureCount";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeatureCount />
      <Services />
      <Testimonial />
      <ContactUs />
    </>
  );
};

export default Home;
