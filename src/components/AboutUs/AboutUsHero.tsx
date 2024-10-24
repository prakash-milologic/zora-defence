import React from 'react'
import hero from "@/assets/images/hero.png"
import Image from 'next/image'
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const AboutUsHero = () => {
    return (
        <div>
            <div className=" flex flex-col justify-center text-center items-center gap-24 bg-[#0F0F0F ] pt-12 pb-12">
                <Image  src={hero} alt="about" width={400} height={400} />
                <div className="items-center flex flex-col gap-3 text-center justify-center">
                <BiSolidQuoteAltLeft className="text-6xl  text-[#A58441]" />
                <p style={{fontFamily:"open"}} className="text-2xl opacity-80 font-light">At Zora, we stand for more than just security—we stand for<br/> trust, reliability, and peace of mind. With a team of seasoned <br/> professionals, we provide tailored solutions in manned <br/> guarding, static security, and close protection services. Our<br /> mission is to safeguard what matters most, ensuring our clients<br/> feel secure in every situation, whether personal, corporate, or<br/> event-related. At Zora, your safety is not just a job.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsHero