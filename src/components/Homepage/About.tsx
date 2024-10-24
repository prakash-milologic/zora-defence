import React from 'react'
import about from "@/assets/images/about.png"
import Image from 'next/image'

const About = () => {
    return (
        <div className=" bg-[#0F0F0F] pt-12 px-6 md:px-[104px] bg-hero md:h-screen overflow-hidden">
            <div className="flex flex-col gap-16 md:flex-row max-w-8xl">
                <div className="w-full md:w-1/3">
                    <Image src={about} alt="about" width={400} height={400} />
                </div>
                <div className="w-full md:w-2/3  flex  flex-col  gap-6">
                    <h2 className="mt-6 md:text-left text-[#A58441] font-bold text-base">About</h2>

                    <h1 className="text-6xl font-medium ">We Provide Reliable & <br /> Professional Security</h1>

                    <h6 className="text-base opacity-80 font-normal">Zora Defence Security Ltd offer a range of services in the Security Sector. Working <br /> alongside some of the biggest artist in the music industry, including Carl Cox, and <br /> covering festivals such as The Lichfield Proms in the Park 2021.<br/><br/>
                        Zora Defence provide services to a prestige clientele and endeavour to ensure each event <br/> runs as seamlessly as possible whilst providing a high standard of professionalism<br/>
                        and care.</h6>

                    <div className=" flex flex-col sm:flex-row justify-center md:justify-start">
                    <button  type="button" className="font-bold bg-[#A58441] text-base px-5 py-2.5 text-center me-2 mb-2">MORE ABOUT US</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About