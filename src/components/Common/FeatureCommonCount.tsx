import React from 'react';

const FeatureCommonCount = ({ featureItems }: { featureItems: { count: string; title: string }[] }) => {
    return (
        <div className="bg-[#000000] pt-12 pb-12">
            <div className="flex flex-col justify-center text-center md:flex-row gap-24">
                {
                    featureItems.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2 border p-7">
                            <h1 className="text-5xl font-medium">{item.count}</h1>
                            <p className="text-xs opacity-80 font-normal">{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FeatureCommonCount;
