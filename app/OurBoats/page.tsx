"use client";

import TitlePhoto from "@/app/Components/TitlePhoto";
import React from "react";
import Image from 'next/image'

const boats = [{
    text: "Proteus was where it all began for UMEB. The 17-ft catamaran hull was repurposed from the 2016 Rio Olympics, and the 1970’s-era outboard motor was converted to run on electric power. Despite the COVID lockdown and limited workspace, the team persevered and decided to build Proteus outdoors, braving harsh weather conditions, including snow, rain, and summer heat. Piloted by the team’s Chief Engineer, Sean Hickey, Proteus finished second at the 2021 Promoting Electric Propulsion completion. This was an impressive feat given that it was UMEB’s first time participating in any competition. ",
    name: "Proteus",
    speed: "12mph",
    image: "/TitlePhotos/OurBoatsProteus.png",
    performance: "31 hp",
    year: "2020"
}, {
    text: "Snowfinkle is a next generation racing craft, utilizing hydrofoil technology to lift the boat out of the water and achieve flight. The 17 foot winged vessel glides through the water, remotely piloted and stabilized by a passive control system as well as active control surfaces on the foils themselves. Snowfinkle participated at the 2022 and 2023 Promoting Electric Propulsion Competition, but unfortunately did not place in the top 3 ",
    name: "Snowfinkle",
    speed: "30mph",
    image: "/TitlePhotos/OurBoatsSnowfinkle.png",
    performance: "48 hp",
    year: "2020"
}, {
    text: "Named after our former Captain, The Parmar was the vessel we took to the Promoting Electric Propulsion competition! Though we had many setbacks with Snowfinkle, we spent the last three days before we left for the competition building this new vessel to compete. The Parmar raced slightly over 3.5 miles (a mile for every day we worked on it!) and was the last vessel on the water when the end timer for our heat rang. It is composed of donated parts from the University of Michigan’s Naval Architecture & Marine Engineering department as well as components from one of our old vessels, Proteus. While it does not showcase our intended design plan for the year, it does demonstrate the innovation and dedication our engineering team had.",
    name: "The Parmar",
    speed: "0",
    image: "/TitlePhotos/OurBoatsParmar.png",
    performance: "0",
    year: "2020"
}, {
    text: "Our internal name for the 2024-2026 design cycle vessel is BMBF. While we were originally planning for the Monaco Energy Boat Challenge for this design cycle, we realized how limiting the logistics and fabrication of that vessel would be. Because of this, the team has decided to shift gears and instead manufacture a vessel with speed as its goal. We are planning on outfitting a Liberator tunnel hull with custom battery packs composed of Murata VTC6A cells for a total output of 300kW. ",
    name: "BMBF",
    speed: "TBD",
    image: "/TitlePhotos/OurBoatsBMBF.png",
    performance: "TBD",
    year: "2020"
}]

const titlePhoto = "/TitlePhotos/OurBoats.png?v=2"
const titleText = "Our Boats"
export default function Home() {
    return (
        <>
            <TitlePhoto title={titleText} image={titlePhoto}/>
            <div className="w-full bg-white">
                <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2 px-3"}>
                    <div className={"lg:w-1/4 w-full flex justify-center relative order-last lg:order-first"}>
                        <Image src={"/Races/PEP.JPG"} alt={"Image Not Found"} width={500} height={500} className={"object-scale-down"}></Image>
                    </div>
                    <div className={"w-full md-py-0 pb-2 lg:w-1/2 pl-2 lg:pl-8 md:pl-6 sm:pl-4"}>
                        <h1 className={"text-lg lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
                            TiDE
                        </h1>
                        <p className={"text-sm lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight"}>
                            TiDE is the most ambitious design that UMEB has undertaken. The craft will feature a 22 foot deep tunnel racing hull equipped with a full control system and custom-designed battery packs. These battery packs will have 69 kWh of capacity, 814 volts of peak voltage, and a lightweight design. TiDE will be powered by a 430 kW (575 horsepower) electric axial flux motor coupled with an overdrive arneson system.
                        </p>
                        <p className={"text-sm lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight pt-5"}>
                            UMEB looks forward to using this craft as the foundation for the coming competitions, including Lake of the Ozarks Shootout and Monaco Energy Boat Challenge.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-stone-100">
                <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2 px-3"}>
                    <div className={"w-full lg:w-1/2 pl-2 lg:pr-8 md:pr-6 sm:pr-4 lg:pb-0 pb-2"}>
                        <h1 className={"text-lg lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
                            The Parmar
                        </h1>
                        <p className={"text-sm lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight"}>
                            Unfortunately, Snowfinkle was not seaworthy in time for the 2023 Promoting Electric Propulsion. Instead of traveling empty handed, we built the Parmar. While it does not showcase our intended design, it does demonstrate the innovation and dedication our engineering team
                            had. The Parmar raced over 3.5 miles, a mile for every day we spent manufacturing the craft.
                        </p>
                        <p className={"text-sm lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight pt-5"}>
                            The Parmar ended up placing 4th at Promoting Electric Propulsion. The team had fun cruising around the course, and ended the competition on a much higher note, optimism and team spirits at an all time high.
                        </p>
                    </div>
                    <div className={"lg:w-1/4 w-full flex justify-center relative flex md:justify-end justify-center"}>
                        <Image src={"/Races/Ozark.jpg"} alt={"Image Not Found"} width={500} height={500} className={"object-scale-down"}></Image>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white">
                <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2 px-3"}>
                    <div className={"lg:w-1/4 w-full flex justify-center relative order-last lg:order-first"}>
                        <Image src={"/Races/Wye.png"} alt={"Image Not Found"} width={500} height={500} className={"object-scale-down"}></Image>
                    </div>
                    <div className={"w-full lg:w-1/2 pl-2 lg:pl-8 md:pl-6 sm:pl-4 lg:pb-0 pb-2"}>
                        <h1 className={"text-lg lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
                            Snowfinkle
                        </h1>
                        <p className={"text-sm lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight"}>
                            Snowfinkle is a next generation racing craft, utilizing hydrofoil technology to lift the boat out of the water and achieve flight. Powered by two 41 horsepower DHX motors submerged underwater in custom-built aluminum propulsion pods, Snowfinkle can reach top speeds of up to 30 miles per hour. The 17 foot winged vessel glides through the water, remotely piloted and stabilized by a passive control system as well as active control surfaces on the foils themselves.
                        </p>
                        <p className={"text-sm lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight pt-5"}>
                            Snowfinkle was showcased at the Promoting Electric Propulsion (PEP) competition in June 2022 and 2023. The complex design taught the team how to
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-stone-100">
                <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2 px-3"}>
                    <div className={"w-full lg:w-1/2 pr-2 lg:pr-8 md:pr-6 sm:pr-4 lg:pb-0 pb-2"}>
                        <h1 className={"text-lg lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
                            Proteus
                        </h1>
                        <p className={"text-sm lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight"}>
                            Proteus was where it all began for UMEB. The 17-ft catamaran hull was repurposed from the 2016 Rio Olympics, and the 1970’s-era outboard motor was converted to run on electric power. The powertrain ran on a 72V Li-FePo4 battery with a DHX motor producing 31 hp, enabling Proteus to sustain speeds of 12mph for up to 5 miles.
                        </p>
                        <p className={"text-sm lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight pt-5"}>
                            Despite the COVID lockdown and limited workspace, the team persevered and decided to build Proteus outdoors, braving harsh weather conditions, including snow, rain, and summer heat.
                        </p>
                        <p className={"text-sm lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight pt-5"}>
                            Proteus finished second at the 2021 Promoting Electric Propulsion completion. This was an impressive feat given that it was UMEB&apos;s first time participating in any competition. Proteus will always hold a special place in the team&apos;s hearts as a testament to our hard work and dedication to our craft.
                        </p>
                    </div>
                    <div className={"lg:w-1/4 w-full flex justify-center relative flex md:justify-end justify-center"}>
                        <Image src={"/Races/Monaco.jpg"} alt={"Image Not Found"} width={500} height={500} className={"object-scale-down"}></Image>
                    </div>
                </div>
            </div>
        </>
    );
}