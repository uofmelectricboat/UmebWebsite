import React from "react";

interface BoatProps {
    performance: string;
    speed: string;
    name: string;
    image: string;
    text: string;
    index: any;
}

const Boats: React.FC<BoatProps> = ({ performance, name, speed, image, text, index }) => {
    const changeSides = index % 2 === 0;

    const containerClass = changeSides ? 'flex relative' : 'flex relative flex-row-reverse';
    const bgClass = changeSides ? 'w-1/2 p-10 bg-blue-950 relative' : 'w-1/2 p-10 bg-white relative';
    const textClass = changeSides ? 'text-white text-2xl text-center leading-relaxed' : 'text-2xl text-center leading-relaxed';
    const infoClass = changeSides ? 'text-white absolute bottom-0 left-0 right-0 flex pb-10' : 'absolute bottom-0 left-0 right-0 flex pb-10';

    return (
        <div className={containerClass}>
            <div className="w-1/2">
                <img src={image} alt="Your Image" className="w-full" />
            </div>
            <div className={bgClass}>
                <h1 className="text-yellow-500 text-6xl text-center font-bold">{name}</h1>
                <div className="p-10">
                    <p className={textClass}>
                        {text}
                    </p>
                </div>
                <div className={infoClass}>
                    <div className="w-1/2 text-center">
                        <h2 className="font-bold text-4xl">
                            Performance
                        </h2>
                        <h3 className="text-4xl py-5">
                            {performance}
                        </h3>
                    </div>
                    <div className="w-1/2 text-center">
                        <h2 className="font-bold text-4xl">
                            Speed
                        </h2>
                        <h3 className="text-4xl py-5">
                            {speed}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Boats;