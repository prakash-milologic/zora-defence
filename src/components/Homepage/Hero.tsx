import React from 'react'
import hero from "@/assets/images/hero.png"

const Hero = () => {
    return (
        <div className="w-full relative bg-no-repeat bg-cover h-[47rem] z-0 rounded-xl overflow-hidden" style={{ backgroundImage: `url(${hero.src})` }}>
            <div className="relative top-[30%] left-[13%]  w-full h-full z-10  flex  flex-col gap-5 ">
                <h1 className="text-7xl font-medium ">We Secure What <br/> Matters Most</h1>
                <h6 className="text-base opacity-80 font-normal">Expert security professionals ensuring reliable protection through <br/> manned guarding, static security, and close protection services.</h6>
                <button style={{width:"220px"}} type="button" className="font-bold bg-[#A58441] text-base px-5 py-2.5 text-center me-2 mb-2">EXPLORE SERVICES</button>
                </div>
        </div>
    )
}

export default Hero