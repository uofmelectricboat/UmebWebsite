"use client";
import React from "react";
import Button from "../Button";
import Image from "next/image";

interface SponsorCardProps {
    link: string;
    name: string;
    image: string;
    text: string;
    index: any;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ link, name, image, text, index }) => {
    return (
        <>
            <div className="lg:px-20 md:px-10 sm:px-5 py-5">
                <div className={'flex lg:flex-row  flex-row-reverse relative hover:shadow-xl p-4 shadow-sm bg-white transition-transform transform duration-500 ease-in-out hover:scale-105 rounded-lg'}>
                    <div className="w-full lg:w-1/3 md:relative">
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
                    <div className="lg:w-2/3 w-full text-left px-5 flex-col">
                        <div className={"pb-2"}>
                            <h2 className="text-2xl font-bold">
                                {name}
                            </h2>
                        </div>
                        <div className={"pb-5"}>
                            <p className="text-xl">
                                {text}
                            </p>
                        </div>
                        <div className={"flex justify-end"}>
                            <Button text={"Learn More"} width={40} href={link}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SponsorCard;