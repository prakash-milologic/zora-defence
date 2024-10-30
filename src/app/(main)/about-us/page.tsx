"use client";
import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import FeatureCommonCount from "@/components/Common/FeatureCommonCount";
import HeroTemplate from "@/components/Common/HeroTemplate";
import ContactUs from "@/components/Homepage/ContactUs";
import { countItem } from "@/constants/option";

const page = () => {
  return (
    <>
      <HeroTemplate
        pageName="ABOUT US"
        title="Our Mission: Your Safety"
        description="Committed to delivering unmatched security solutions with integrity, professionalism, and excellence."
      />

      <AboutUsHero />
      <FeatureCommonCount featureItems={countItem} />
      <WhyChooseUs />
      <ContactUs />
    </>
  );
};

export default page;
