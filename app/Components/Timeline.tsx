// components/Timeline.tsx
import React from 'react';
import Image from 'next/image'
import BoatCard from "@/app/Components/BoatCard";

interface TimelineProps {
    boats: any[];
}

const Timeline: React.FC<TimelineProps> = ({ boats }) => {
    return (
        <div className="flex flex-col items-center justify-center relative min-h-screen bg-blue-950 py-10">
            {/* Vertical Line */}
            <div className="hidden sm:block w-1 bg-white absolute h-full left-1/2 transform -translate-x-1/2 top-10 bottom-2"></div>

            {/* Events */}
            {boats.map((boat: any, index: number) => (
                <div key={index} className="mt-6 sm:mt-0 sm:mb-12">
                    <div className="flex flex-col sm:flex-row items-center">
                        <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} w-full mx-auto items-center px-10`}>
                            <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'}`}>
                                <div className="p-4 bg-white rounded shadow">
                                    <Image src={boat.image} alt={"Image Not Found"} width={100} height={100}></Image>
                                    <h1 className="font-bold text-xl text-yellow-500">
                                        {boat.name}
                                    </h1>
                                    <p>
                                        {boat.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-full bg-blue-500 border-white border-4 w-12 h-12 absolute left-1/2 -translate-y-6 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-white font-medium">
                            <span className="text-sm">1997</span> {/* Replace '1997' with the year you want to display */}
                        </div>
                    </div>
                </div>
            ))}
        </div>


    );
};

export default Timeline;
