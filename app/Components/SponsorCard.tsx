import React from "react";

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
        <div className="p-20">
            <div className={containerClass}>
                {/* TODO: add inthe style for the image */}
                <div className="w-1/3">
                    <img src={image}> </img>
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