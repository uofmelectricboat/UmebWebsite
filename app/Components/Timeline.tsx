// components/Timeline.tsx
import React from 'react';
import Image from 'next/image'

interface TimelineProps {
    boats: any[];
}

const Timeline: React.FC<TimelineProps> = ({ boats }) => {
    return (
        <div className="flex flex-col items-center justify-center relative min-h-screen bg-blue-950 py-10">
            <div className="flex justify-start w-1 bg-white absolute h-full left-1/2 transform -translate-x-1/2 bottom-10"></div>

            {/* Events */}
            {boats.map((boat: any, index: number) => (
                <div key={index} className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex flex-col sm:flex-row items-center">
                        <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} w-full mx-auto items-center px-10`}>
                            <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'}`}>
                                <h1 className={`${index % 2 === 0 ? 'text-left' : 'text-right'} font-bold text-xl text-yellow-500`}>
                                    {boat.name}
                                </h1>
                                <p className={`${index % 2 === 0 ? 'text-left' : 'text-right'} text-white`}>
                                    {boat.text}
                                </p>
                                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                    <Image src={boat.image} alt={"Image Not Found"} width={300} height={100}></Image>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-full bg-blue-500 border-white border-4 w-4 h-4 absolute left-1/2 -translate-y-2 transform -translate-x-1/2 flex items-center justify-center text-white font-medium"></div>
                    </div>
                </div>
            ))}
        </div>


    );
};

export default Timeline;
