"use client";
import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import FeatureCommonCount from "@/components/Common/FeatureCommonCount";
import HeroTemplate from "@/components/Common/HeroTemplate";
import ContactUs from "@/components/Homepage/ContactUs";
import { countItem } from "@/constants/option";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const page = () => {
  
  useIntersectionObserver({
    targetClass: "fade-in",
    toggleClass: "visible",
  });

  return (
    <>
      <HeroTemplate
        pageName="ABOUT US"
        title="Our Mission: Your Safety"
        description="Committed to delivering unmatched security solutions with integrity, professionalism, and excellence."
      />
       <div className="fade-in">
      <AboutUsHero />

       </div>
       <div className="fade-in">
      <FeatureCommonCount featureItems={countItem} />
      </div>
      <div className="fade-in">
      <WhyChooseUs />
      </div>
      <div className="fade-in">
      <ContactUs />
      </div>
    </>
  );
};

export default page;
