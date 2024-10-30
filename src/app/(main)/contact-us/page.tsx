"use client";
import React from "react";
import HeroTemplate from "@/components/Common/HeroTemplate";
import Contact from "@/components/ContactUs/Contact";
import ContactForm from "@/components/ContactUs/ContactForm";
import UseIntersectionObserver from "@/hooks/useIntersectionObserver";


const page = () => {

  UseIntersectionObserver({
    targetClass: "fade-in",
    toggleClass: "visible",
  });

  return (
    <>
      <HeroTemplate
        pageName="CONTACT US"
        title="Get In Touch With Us"
        description="Tailored Security Solutions for Every Threat and Environment"
      />
      <div className="fade-in">
        <Contact />
      </div>
      <div className="fade-in">
        <ContactForm />
      </div>
    </>
  );
};

export default page;
