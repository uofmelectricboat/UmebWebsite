import Button from "../Components/buttons"
import React from "react";

interface TitlePhotoProps {
    title: string;
    image: string;
}

const TitlePhoto: React.FC<TitlePhotoProps> = ({ title, image}) => {
    return (
        <div className='relative'>
            <img src={image} className='w-full h-screen object-cover'></img>
            <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-white text-6xl font-bold">{title}</h1>
            </div>
        </div>
    );
}

export default TitlePhoto;