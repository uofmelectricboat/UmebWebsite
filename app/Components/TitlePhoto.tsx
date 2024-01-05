import Button from "../Components/buttons"
import React from "react";
import Image from "next/image"

interface TitlePhotoProps {
    title: string;
    image: string;
}

const TitlePhoto: React.FC<TitlePhotoProps> = ({ title, image}) => {
    return (
        <div className='relative w-full h-full'>
            <Image src={image} alt={"title photo"} fill={true} className={"object-cover"}></Image>
            <div className="absolute inset-0 bg-blue-800 opacity-40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-white text-6xl font-bold">{title}</h1>
            </div>
        </div>
    );
}

export default TitlePhoto;