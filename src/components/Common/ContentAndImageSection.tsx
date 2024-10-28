import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
    src: StaticImageData;
    alt: string;
    heading: string;
    title: string;
    desc1: string;
    desc2?: string;
    isreversible?: boolean;
    list?: string[];
}

const ContentAndImageSection = ({src, alt, heading, title, desc1,desc2 = "",isreversible=false,list=[]}: Props) => {
  return (
    <div className={` ${isreversible ? "bg-[#000000]" : "bg-[#0F0F0F]"}  lg:pt-28 pt-14 px-6 md:px-[104px]  md:h-screen  overflow-hidden`}>
            <h2 className="mb-6 md:text-left text-[#A58441] font-bold text-base lg:hidden">{heading}</h2>

    <div className={`flex ${isreversible ? 'flex-col-reverse md:flex-row-reverse ':'flex-col md:flex-row'} gap-16  max-w-8xl`}>
        <div className="w-full md:w-1/3">
            <Image src={src} alt={alt} width={400} height={400} />
        </div>
        <div className="w-full md:w-2/3  flex  flex-col  gap-6">
            <h2 className="mt-6 md:text-left text-[#A58441] font-bold text-base lg:block hidden">{heading}</h2>

            <h1 className="lg:text-6xl text-4xl font-medium ">{title}</h1>

            <h6 className="lg:text-base text-sm opacity-80 font-normal">{desc1}</h6>
            {
                list.length > 0 && (
                    <ul className="list-disc list-inside">
                        {
                            list.map((item, index) => (
                                <li key={index} className="lg:text-base text-sm opacity-80 font-normal">{item}</li>
                            ))
                        }
                    </ul>
                )
            }
            <h6 className="lg:text-base text-sm opacity-80 font-normal">{desc2}</h6>

            <div className=" flex flex-col sm:flex-row justify-center md:justify-start">
            <button  type="button" className="font-bold bg-[#A58441] lg:text-base text-xs py-2.5 text-center me-2 mb-2">MORE ABOUT US</button>
            </div>
        </div>

    </div>
</div>
  )
}

export default ContentAndImageSection