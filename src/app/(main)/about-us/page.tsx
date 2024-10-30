"use client";
import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import FeatureCommonCount from "@/components/Common/FeatureCommonCount";
import HeroTemplate from "@/components/Common/HeroTemplate";
import { countItem } from "@/constants/option";
import UseIntersectionObserver from "@/hooks/useIntersectionObserver";

const page = () => {

  UseIntersectionObserver({
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
    </>
  );
};

export default page;
