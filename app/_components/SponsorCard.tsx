"use client";
import React from "react";
import { Button } from "flowbite-react";
import Image from "next/image";

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

    const containerClass ='flex lg:flex-row flex-col relative flex-row-reverse relative shadow-lg bg-white p-4 transition-transform transform hover:scale-105 rounded-lg';
    return (
        <>
            <div className="lg:px-20 md:px-10 sm:px-5 py-5">
                <div className={containerClass}>
                    <div className="w-full lg:w-1/6 md:relative">
                        <div className="lg:absolute inset-0 flex justify-center">
                            <Image
                                src={image}
                                alt="image"
                                className="rounded-lg object-scale-down"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                    <div className="lg:w-5/6 w-full text-left px-5">
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