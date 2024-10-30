import hero from "@/assets/images/hero.png";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { FgQuoteIcon } from "../SVGCollections";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
const openSans = Open_Sans({
  subsets: ["latin"],
  
});
const AboutUsHero = () => {
  useIntersectionObserver({
    targetClass: "fade-in",
    toggleClass: "visible",
  });
  return (
    <div>
      <div className="flex flex-col justify-center text-center items-center gap-10 lg:gap-20 gap-8 bg-[#0F0F0F] mt-[-30px]">
        <div className=" w-full h-full lg:w-[916px] lg:h-[440px] relative lg:-mt-10">
        <div className="absolute w-full h-full bg-gradient-to-r from-black from-15% to-white/0"></div>
        <Image src={hero} alt="about" width={600} height={600} className="w-full h-full object-cover" />
        </div>
        <div className="items-center flex flex-col  gap-8 lg:gap-16 text-center justify-center">
      <div className="fade-in">
         <FgQuoteIcon />
      </div>
          <p
            className={` m-auto w-3/4  lg:text-[40px] text-white/80 md:text-2xl fade-in  font-[340] lg:leading-[60px]  ${openSans.className}`}
          >
            At Zora, we stand for more than just security—we stand for <em> trust,
            reliability, and peace of mind.</em> With a team of seasoned
            professionals, we provide tailored solutions in manned guarding,
            static security, and close protection services. Our mission is to
            safeguard what matters most, ensuring our clients feel secure in
            every situation, whether personal, corporate, or event-related. At
            Zora, your safety is not just a job.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
