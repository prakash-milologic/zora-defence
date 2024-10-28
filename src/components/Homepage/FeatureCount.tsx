import React from 'react'

const FeatureCount = () => {
    return (
        <div className="lg:my-12 my-10 bg-black lg:py-20 py-10 lg:px-0 px-2">
            <div className="flex justify-center text-center lg:gap-24 gap-2">
                <div className="flex flex-col gap-2 border-[0.5px] border-primary-500 lg:p-7 p-4">
                    <h1 className="lg:text-6xl text-2xl font-medium">647</h1>
                    <p className="text-xs opacity-80 font-normal">No. of Clients</p>
                </div>
                <div className="flex  flex-col gap-2 border-[0.5px] border-primary-500 lg:p-7 p-4">
                    <h1 className="lg:text-6xl text-2xl font-medium">30+</h1>
                    <p className="text-xs opacity-80 font-normal">Years of Experience</p>
                </div>
                <div className=" flex  flex-col gap-2 border-[0.5px] border-primary-500 lg:p-7 p-4">
                    <h1 className="lg:text-6xl text-2xl font-medium">244</h1>
                    <p className="text-xs opacity-80 font-normal">No. of Employees</p>
                </div>
                <div className=" flex  flex-col gap-2 border-[0.5px] border-primary-500 lg:p-7 p-4">
                    <h1 className="lg:text-6xl text-2xl font-medium">12</h1>
                    <p className="text-xs opacity-80 font-normal">Global Markets</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCount