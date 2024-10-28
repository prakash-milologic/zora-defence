import { features } from "@/Constant/whyChooseUsData";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#0F0F0F] lg:py-12 py-10 px-6 lg:px-0">
      <div className="flex flex-col justify-center items-center gap-5 mt-6 mb-12">
        <h2 className="md:text-left text-[#A58441] font-bold text-base">
          WHY CHOOSE US
        </h2>
        <h1 className="lg:text-7xl text-3xl font-medium">What Sets Us Apart</h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#171717] lg:p-6 p-4 flex lg:gap-10 gap-4 rounded-lg shadow-lg "
          >
            <div className=" mb-4 text-[#A58441] ">
              <div className="lg:h-[60px] lg:w-[60px] h-10 w-10 flex justify-center items-center bg-[#A5844126]">
                {feature.icon}
              </div>
            </div>
            <div className="flex flex-col lg:gap-2 gap-1">
              <h3 className="lg:text-2xl text-xl font-semibold">{feature.title}</h3>
              <p className="lg:text-base text-xs opacity-80 font-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
