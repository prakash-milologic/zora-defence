import React from 'react'

const FeatureCount = () => {
    return (
        <div className=" bg-[##000000]  mt-12 mb-12">
            <div className="flex flex-col justify-center text-center  md:flex-row gap-24">
                <div className=" flex  flex-col  gap-2 border p-7">
                    <h1 className="text-6xl font-medium  ">647</h1>
                    <p className="text-xs opacity-80 font-normal">No. of Clients</p>
                </div>
                <div className=" flex  flex-col gap-2 border p-7">
                    <h1 className="text-6xl font-medium ">30+</h1>
                    <p className="text-xs opacity-80 font-normal">Years of Experience</p>
                </div>
                <div className=" flex  flex-col gap-2 border p-7">
                    <h1 className="text-6xl font-medium ">244</h1>
                    <p className="text-xs opacity-80 font-normal">No. of Employees</p>
                </div>
                <div className=" flex  flex-col gap-2 border p-7">
                    <h1 className="text-6xl font-medium ">12</h1>
                    <p className="text-xs opacity-80 font-normal">Global Markets</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureCount