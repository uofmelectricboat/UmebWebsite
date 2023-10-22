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

    const containerClass = changeSides ? 'flex relative px-20' : 'flex relative flex-row-reverse px-20';

    return (
        <div className="p-20 border border-black">
            <div className={containerClass}>
                <div className="w-1/3 relative">
                    <div className="absolute inset-0 flex justify-center items-center">
                        <Image
                            src="/images/SunlightZoneBg.png" // Bottom Image
                            alt="Bottom Image"
                            width={350}
                            height={350}
                        />
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <Image
                            src={image} // Top Image
                            alt="image"
                            width={350}
                            height={350}
                        />
                    </div>
                </div>
                <div className="w-2/3 text-left">
                    <div>
                        <h2 className="text-2xl italic ">
                            {zone}
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">
                            {name}
                        </h2>
                    </div>
                    <div>
                        <p className="text-xl">
                            {text}
                        </p>
                    </div>
                    <div>
                        {/* TODO: make button go to br and bl */}
                        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">Learn More</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SponsorCard;