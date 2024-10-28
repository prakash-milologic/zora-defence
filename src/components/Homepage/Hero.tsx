import React from 'react'
import hero from "@/assets/images/hero.png"

const Hero = () => {
    return (
        <div className="w-full relative bg-no-repeat bg-cover lg:h-[47rem] h-[38rem] z-0 rounded-xl overflow-hidden" style={{ backgroundImage: `url(${hero.src})` }}>
            <div className="relative top-[30%] lg:left-[13%] left-5  w-full h-full z-10  flex  flex-col gap-5 ">
                <h1 className="lg:text-7xl text-4xl font-medium ">We Secure What <br/> Matters Most</h1>
                <h6 className="lg:text-base text-sm opacity-80 font-normal lg:pr-0 pr-12">Expert security professionals ensuring reliable protection through <br /> manned guarding, static security, and close protection services.</h6>
                <button  type="button" className="lg:w-[220px] w-[180px] font-bold bg-[#A58441] lg:text-base text-xs py-2.5 text-center me-2 mb-2">EXPLORE SERVICES</button>
                </div>
        </div>
    )
}

export default Hero