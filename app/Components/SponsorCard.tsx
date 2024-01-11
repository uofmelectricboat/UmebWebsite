"use client";
import React from "react";
import { Button } from "flowbite-react";

interface SponsorCardProps {
    zone: string;
    name: string;
    image: string;
    text: string;
    learnMore: string;
    index: any;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ zone, name, learnMore, image, text, index }) => {
    const changeSides = index % 2 === 0;

    const containerClass = changeSides ? 'flex lg:flex-row flex-col relative relative shadow-lg bg-white p-4 transition-transform transform hover:scale-105 rounded-lg' : 'flex lg:flex-row flex-col relative flex-row-reverse relative shadow-lg bg-white p-4 transition-transform transform hover:scale-105 rounded-lg';
    var imageBackground;
    if(zone == "SUNLIGHT ZONE") {
        imageBackground = "/images/SunlightZoneBg.png"
    } else {
        imageBackground = "/logos/TwilightZoneBg.png"
    }

    return (
        <>
            <div className="lg:px-20 md:px-10 sm:px-5 py-5">
                <div className={containerClass}>
                    <div className="lg:w-1/6 lg:block relative ">
                        <div className="flex inset-0 justify-center ">
                            <img
                                src={imageBackground} // Bottom Image
                                alt="Bottom Image"
                                className="rounded-lg object-scale-down"
                            />
                        </div>
                        <div className="absolute inset-0 flex justify-center">
                            <img
                                src={image} // Top Image
                                alt="image"
                                className="rounded-lg object-scale-down"
                            />
                        </div>
                    </div>
                    <div className="lg:w-5/6 w-full text-left lg:px-20 md:px-10 sm:px-5 px-2">
                        <div>
                            <h2 className="lg:text-4xl text-2xl font-bold">
                                {name}
                            </h2>
                        </div>
                        <div>
                            <p className="text-sm lg:text-2xl md:text-xl sm:text-base">
                                {text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SponsorCard;