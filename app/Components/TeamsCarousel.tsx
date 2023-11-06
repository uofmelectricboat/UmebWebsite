"use client";
import React, {useState, useEffect} from "react";
import Image from 'next/image';

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
        team: "electrical",
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
    const [page, setPage] = useState<number>(1);
    useEffect(() => {
        let int = setInterval(() => {
            setPage(prev => ((prev+1) >= 4 ? 1 : prev+1))
        }, 5000)
        return ()=>clearInterval(int);
    }, []);

    const handlePrevPage = ()=> {
        setPage(prev => ((prev - 1) <= 0 ? 3 : prev - 1))
    }

    const handleNextPage = () => {
        setPage(prev => ((prev + 1) >= 4 ? 1 : prev + 1))
    }

    return (
        <main className="relative flex h-full w-full flex-col justify-center items-center">
            <div className="flex w-full h-full">
                <Image src={carouselItems[page].imageSrc} alt="temp" width={1800} height={1000}/>
                <div className="bg-blue-950">
                    <h1 className="text-yellow-500 text-6xl text-center py-10">
                        {carouselItems[page].team}
                    </h1>
                    <p className="text-white text-4xl px-10">
                        {carouselItems[page].text}
                    </p>
                </div>
            </div>
            <div className="z-10 fixed absolute bottom-1/2 left-4 text-2xl" onClick={handlePrevPage}>
                <span className="text-white inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-blue-200">
                    &lt;-
                </span>
            </div>
            <div className="z-10 fixed absolute bottom-1/2 right-4 text-2xl" onClick={handleNextPage}>
                <span className="text-white inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-blue-200">
                    -&#62;
                </span>
            </div>
        </main>
    );
}

export default TeamCarousel;