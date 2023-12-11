import React from "react";
import Image from 'next/image';

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

    const containerClass = changeSides ? 'flex relative relative border-2 border-gray-300 bg-slate-100 p-4 transition-transform transform hover:scale-105 rounded-lg' : 'flex relative flex-row-reverse relative border-2 border-gray-300 bg-slate-100 p-4 transition-transform transform hover:scale-105 rounded-lg';
    const buttonClass = changeSides ? 'flex relative flex-row-reverse' : 'flex relative';
    var imageBackground;
    if(zone == "SUNLIGHT ZONE") {
        imageBackground = "/images/SunlightZoneBg.png"
    } else {
        imageBackground = "/logos/TwilightZoneBg.png"
    }

    return (
        <div className="p-20">
            <div className={containerClass}>
                <div className="w-1/6 relative px-20">
                    <div className="absolute inset-0 flex justify-center items-center">
                        <Image
                            src={imageBackground} // Bottom Image
                            alt="Bottom Image"
                            fill={true}
                            className="rounded-lg"
                        />
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <Image
                            src={image} // Top Image
                            alt="image"
                            fill={true}
                            className="rounded-lg"
                        />
                    </div>
                </div>
                <div className="w-5/6 text-left px-20">
                    <div>
                        <h2 className="text-4xl italic ">
                            {zone}
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold">
                            {name}
                        </h2>
                    </div>
                    <div>
                        <p className="text-2xl">
                            {text}
                        </p>
                    </div>
                    <div className={buttonClass}>
                        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SponsorCard;