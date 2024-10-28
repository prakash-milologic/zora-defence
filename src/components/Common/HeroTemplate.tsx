import React from 'react'
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});


const HeroTemplate = ({pageName,title,description}: {pageName: string,title: string,description: string}) => {
  return (
    <div className='lg:pt-[120px] lg:pb-10 md:py-10 py-6 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F] to-[#222222] flex flex-col justify-center items-center lg:gap-5 gap-2'>
      <h2 className="md:text-left text-[#A58441] font-bold text-base">{pageName}</h2>
      <div className='flex flex-col lg:gap-4 gap-2 text-center lg:pb-[72px] md:pb-10 pb-5'>
        <h1 className='lg:text-7xl text-3xl font-medium'>{title}</h1>
        <h6 className={`lg:text-xl text-sm text-white/80 opacity-80 font-[340] ${openSans.className}`}>{description}</h6>
      </div>
    </div>
  )
}

export default HeroTemplate