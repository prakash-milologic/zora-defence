import React from 'react'

const HeroTemplate = ({pageName="",title="",description=""}: {pageName: string,title: string,description: string}) => {
  return (
    <div className='h-[40vh] bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F] to-[#222222] flex flex-col justify-center items-center gap-5'>
      <h2 className=" md:text-left text-[#A58441] font-bold text-base">{pageName}</h2>
      <div className='flex flex-col gap-4 text-center'>
        <h1 className='lg:text-7xl text-6xl font-medium'>{title}</h1>
        <h6 className='text-base opacity-80 font-normal'>{description}</h6>
      </div>
    </div>
  )
}

export default HeroTemplate