import { features } from '@/Constant/whyChooseUsData';


const WhyChooseUs = () => {
    return (
        <div className="bg-[#0F0F0F] py-12">
            <div className=' flex flex-col justify-center items-center gap-5 mt-6 mb-12'>
                <h2 className=" md:text-left text-[#A58441] font-bold text-base">WHY CHOOSE US</h2>
                <h1 className='lg:text-7xl text-6xl font-medium'>What Sets Us Apart</h1>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-10 px-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-[#171717] p-6 flex gap-10 rounded-lg shadow-lg "
                    >
                        <div className="text-4xl mb-4  h-12 w-12 text-[#A58441] ">
                        <div className=' h-[60px] w-[60px] flex justify-center items-center  bg-[#A5844126]'>
                            {feature.icon}

                        </div>
                            </div>
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-2xl font-semibold">{feature.title}</h3>
                            <p className='text-base opacity-80 font-normal'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyChooseUs