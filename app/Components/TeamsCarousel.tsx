"use client";
import React, {useState, useEffect} from "react";
import Image from 'next/image';
import { Carousel } from 'flowbite-react';

interface TeamCarouselProps {
}

const carouselItems = [
    {
        imageSrc: '/images/MechanicalPhoto.png', // Replace with the actual image paths
        text: 'The UMEB Mechanical Team is responsible for the component-level design, manufacturing, testing, and validation of all structural, drivetrain, and safety systems on the boat. Additionally, the mechanical team works closely with electrical team leadership to make system-level decisions on the design of the boat and assures all systems on the boat operate cohesively. On top of working on and designing the boat, the mechanical team will focus extensively on the growth of the overall team\'s CAD and manufacturing capabilities.',
        team: 'Mechanical',
    },
    {
        imageSrc: '/images/ElectricalPhoto.png',
        text: 'The UMEB Mechanical Team is responsible for the component-level design, manufacturing, testing, and validation of all structural, drivetrain, and safety systems on the boat. Additionally, the mechanical team works closely with electrical team leadership to make system-level decisions on the design of the boat and assures all systems on the boat operate cohesively. On top of working on and designing the boat, the mechanical team will focus extensively on the growth of the overall team\'s CAD and manufacturing capabilities.',
        team: "Electrical",
    },
    {
        imageSrc: '/images/OperationsPhoto.png',
        text: 'The Operations Subteam is responsible for managing the logistical demands of the Michigan Electric Boat Team, including the maintenance of the Wilson Center workspace(s), organization and design reviews, and communication with competition(s) and competition sponsors. Additionally, the subteam handles the standard operating procedures and safety procedures with the Manufacturing Coordinator to promote a productive and efficient working environment. Lastly, the Operations Subteam manages the general recruitment, logistics, and communications within the team.',
        team: "Operations"
    },
    {
        imageSrc: '/images/BusinesPhoto.png',
        text: 'UMEB’s business team is responsible for supporting our engineers in all other tasks ranging from sponsor relations to marketing the team on various platforms. We strive to prevent our engineers from lacking any resources that would limit their innovation. Each year, we raise tens of thousands of dollars in order to build the fastest boat possible.',
        team: "Business",
    },
];

const TeamCarousel: React.FC<TeamCarouselProps> = () => {
    return (
        <Carousel>
            <div className="flex w-full h-full">
                <Image src={carouselItems[0].imageSrc} alt="temp" width={1800} height={1000}/>
                <div className="bg-blue-950">
                    <h1 className="text-yellow-300 text-6xl text-center py-10">
                        {carouselItems[0].team}
                    </h1>
                    <p className="text-white text-4xl px-10 tracking-wide leading-relaxed">
                        {carouselItems[0].text}
                    </p>
                </div>
            </div>
            <div className="flex w-full h-full">
                <Image src={carouselItems[1].imageSrc} alt="temp" width={1800} height={1000}/>
                <div className="bg-blue-950">
                    <h1 className="text-yellow-300 text-6xl text-center py-10">
                        {carouselItems[1].team}
                    </h1>
                    <p className="text-white text-4xl px-10 tracking-wide">
                        {carouselItems[1].text}
                    </p>
                </div>
            </div>
            <div className="flex w-full h-full">
                <Image src={carouselItems[2].imageSrc} alt="temp" width={1800} height={1000}/>
                <div className="bg-blue-950">
                    <h1 className="text-yellow-300 text-6xl text-center py-10">
                        {carouselItems[2].team}
                    </h1>
                    <p className="text-white text-4xl px-10 tracking-wide">
                        {carouselItems[2].text}
                    </p>
                </div>
            </div>
            <div className="flex w-full h-full">
                <Image src={carouselItems[3].imageSrc} alt="temp" width={1800} height={1000}/>
                <div className="bg-blue-950">
                    <h1 className="text-yellow-300 text-6xl text-center py-10">
                        {carouselItems[3].team}
                    </h1>
                    <p className="text-white text-4xl px-10 tracking-wide leading-relaxed">
                        {carouselItems[3].text}
                    </p>
                </div>
            </div>
        </Carousel>
    );
}

export default TeamCarousel;