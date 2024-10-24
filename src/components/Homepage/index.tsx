import React from "react";
import Hero from "./Hero";
import About from "./About";
import FeatureCount from "./FeatureCount";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
import Services from "./Services";

const Home = () => {
  const countItem = [
    {
      count: "647",
      title: "No. of Clients"
    },
    {
      count: "30+",
      title: "Years of Experience"
    },
    {
      count: "244",
      title: "No. of Employees"
    },
    {
      count: "12",
      title: "Global Markets"
    },
  ]
  return (
    <>
      <Hero />
      <About />
      <FeatureCount />
      <Services />
      {/* <Testimonial /> */}
      <ContactUs />
    </>
  );
};

export default Home;
