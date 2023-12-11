"use client";

import Image from "next/image";
import TitlePhoto from "@/app/Components/TitlePhoto";
import React from "react";
import YouTube from "react-youtube";


const titlePhoto = "/images/OurRaces.jpg?v=2"
const titleText = "Our Races"
export default function Home() {
    const opts = {
        height: "600",
        width: "1000",
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <>
            <TitlePhoto title={titleText} image={titlePhoto}/>
            <div className="bg-blue-950 px-10">
                <h1 className="text-yellow-500 text-4xl font-bold text-center px-20 py-20">
                    Promoting Electric Propulsion
                </h1>
                <div className="text-center text-white text-2xl tracking-wider">
                    <p className="pb-10 px-20">
                        UM Electric Boat has competed in the ‘Promoting Electric Propulsion’ competition since 2021 and we plan on continuing this tradition—racing against top engineering schools across the country, and winning—for years to come.
                    </p>
                    <p className="pb-10 px-20">
                        UMEB placed second in a heat of 10+ teams in 2021, demonstrating our strengths in both the manned and unmanned races. We hope to return in 2024 to perform even better.
                    </p>
                </div>
            </div>
            <div className="w-full">
                <div className="relative w-full h-0" style={{ paddingBottom: '50%' }}>
                    <Image
                        src="/images/OurRacesRace.png"
                        alt="Image not found"
                        fill={true}
                    />
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <div className="py-20 px-40">
                        <Image
                            src="/images/OurRacesGraphic.png"
                            alt="Image not found"
                            width={700}
                            height={700}
                        />
                    </div>
                </div>
                <div className="w-1/2 py-20 px-10">
                    <p className="text-center text-2xl px-20 tracking-wide leading-relaxed">
                        Each year, the flexible rules and talented competitors at PEP allow us to push forward and create innovative designs. In June of 2023, UMEB and our fellow competitors were tasked with completing a 5 mile race over 5 laps in a short out and back circuit.
                    </p>
                </div>
            </div>
            <div className="pt-5 pb-10">
                <p className="text-center text-2xl px-80 tracking-wide">
                    PEP hosts a wide variety of schools from across the country, each with a unique and innovative design each year. Some schools include:
                </p>
                <div className="flex items-center px-80 py-10 text-2xl">
                    <div className="w-1/2 px-12">
                        <ul className="list-disc ml-4">
                            <li>Princeton University</li>
                            <li>Texas A&M</li>
                            <li> University of Kentucky </li>
                        </ul>
                    </div>
                    <div className="w-1/2 px-12">
                        <ul className="list-disc ml-4">
                            <li>University of Georgia</li>
                            <li>University of Washington</li>
                            <li> Johns Hopkins University </li>
                        </ul>
                    </div>
                </div>
                <div className="w-screen flex items-center justify-center">
                    <div className="relative w-1/2">
                        <div className="relative w-full h-0" style={{ paddingBottom: '50%' }}>
                            <Image
                                src="/images/OurRacesMap.png"
                                alt="Image not found"
                                fill={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-950 py-10">
                <h1 className="text-4xl text-yellow-500 font-bold text-center">
                    Monaco Energy Boat Challenge
                </h1>
                <p className="text-center text-2xl text-white px-60 py-10 tracking-wide leading-loose">
                    UM Electric Boat is considering attending the Monaco Energy Boat Challenge in the near future. The event gathers more than 50 teams from universities and companies across the world. The competition seeks to further innovation in alternative propulsion fuel sources such as solar, hydrogen, wind, and more.
                </p>
            </div>
            {/*TODO: Fix this video*/}
            <div className="w-full flex justify-center bg-blue-950 pb-10">
                <YouTube videoId="kEx7j_lCZ-k" opts={opts} ></YouTube>
            </div>
        </>
    )
  }