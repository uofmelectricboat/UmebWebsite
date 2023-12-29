import React from "react";
import  '../globals.css'


interface BoatCardProps {
    performance: string;
    speed: string;
    name: string;
    image: string;
    text: string;
    index: any;
}

const BoatCard: React.FC<BoatCardProps> = ({ performance, name, speed, image, text }) => {
    return (
        // The outer container with perspective, offset to the left and made larger
        <div className="perspective-container mx-auto w-128 h-96 ml-4">
            {/* The card itself */}
            <div className="card w-full h-full">
                {/* The front of the card with the image */}
                <div className="front absolute backface-hidden w-full h-full rounded-lg overflow-hidden shadow-lg">
                    <img src={image} alt={name} className="object-cover w-full h-full" />
                    {/* Name overlay in the center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-xl font-bold bg-black bg-opacity-50 px-3 py-2 rounded">{name}</span>
                    </div>
                </div>
                {/* The back of the card with performance and speed */}
                <div className="back absolute rotated-180 backface-hidden w-full h-full rounded-lg bg-white shadow-lg flex flex-col items-center justify-center p-4">
                    <p className="text-lg font-bold">Performance: {performance}</p>
                    <p className="text-lg font-bold">Speed: {speed}</p>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default BoatCard;
