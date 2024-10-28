import React from 'react'
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});


const HeroTemplate = ({pageName,title,description}: {pageName: string,title: string,description: string}) => {
  return (
    <div className='py-10 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F] to-[#222222] flex flex-col justify-center items-center gap-5'>
      <h2 className="md:text-left text-[#A58441] font-bold text-base">{pageName}</h2>
      <div className='flex flex-col gap-4 text-center pb-[72px]'>
        <h1 className='lg:text-7xl text-3xl font-medium'>{title}</h1>
        <h6 className={`lg:text-xl text-sm text-white/80 opacity-80 font-[340] ${openSans.className}`}>{description}</h6>
      </div>
    </div>
  )
}

export default HeroTemplate