import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import WhyChooseUs from "@/components/AboutUs/WhyChooseUs";
import FeatureCommonCount from "@/components/Common/FeatureCommonCount";
import HeroTemplate from "@/components/Common/HeroTemplate";
import ContactUs from "@/components/Homepage/ContactUs";

const countItem = [
  {
    count: "647",
    title: "No. of Clients",
  },
  {
    count: "30+",
    title: "Years of Experience",
  },
  {
    count: "244",
    title: "No. of Employees",
  },
  {
    count: "12",
    title: "Global Markets",
  },
];
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
