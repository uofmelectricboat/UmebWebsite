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

    const containerClass = changeSides ? 'flex lg:flex-row sm:flex-col relative relative border-2 border-gray-300 bg-slate-100 p-4 transition-transform transform hover:scale-105 rounded-lg' : 'flex lg:flex-row sm:flex-col relative flex-row-reverse relative border-2 border-gray-300 bg-slate-100 p-4 transition-transform transform hover:scale-105 rounded-lg';
    const buttonClass = changeSides ? 'flex relative flex-row-reverse' : 'flex relative';
    var imageBackground;
    if(zone == "SUNLIGHT ZONE") {
        imageBackground = "/images/SunlightZoneBg.png"
    } else {
        imageBackground = "/logos/TwilightZoneBg.png"
    }

    return (
        <>
            <div className="lg:px-20 md:px-10 sm:px-5 p-2">
                <div className={containerClass}>
                    <div className="lg:w-1/6 hidden lg:block relative">
                        <div className="absolute inset-0 flex justify-center items-center">
                            <img
                                src={imageBackground} // Bottom Image
                                alt="Bottom Image"
                                className="rounded-lg  h-64"
                            />
                        </div>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <img
                                src={image} // Top Image
                                alt="image"
                                className="rounded-lg object-scale-down h-64"
                            />
                        </div>
                    </div>
                    <div className="lg:w-5/6 w-full text-left lg:px-20 md:px-10 sm:px-5 px-2">
                        <div>
                            <h2 className="text-4xl font-bold">
                                {name}
                            </h2>
                        </div>
                        <div>
                            <p className="text-sm lg:text-2xl md:text-xl sm:text-base">
                                {text}
                            </p>
                        </div>
                        <div className={buttonClass}>
                            <Button gradientDuoTone={"purpleToPink"} outline> Learn More </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SponsorCard;