"use client";
import React from 'react';
import Image from 'next/image';
import TitlePhoto from '@/app/Components/TitlePhoto';
import Carousel from '@/app/Components/HomeCarousel';

const titleText = "";
const titlePhoto = "/images/Home.jpg?v=3";

export default function Home() {
    return (
        <>
            <TitlePhoto title={titleText} image={titlePhoto} />
            <div className="relative w-full h-full">
                <Image src="/images/purposeHome.jpg" alt="temp" fill={true} className={"object-cover"}/>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute top-8 left-10 py-3">
                    <h2 className="md:text-4xl text-2xl font-bold text-white"> Our Purpose </h2>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center lg:px-80 md:px-20 px-2">
                    <p className="text-center md:text-2xl text-white"> Michigan Electric Boat is established for the purpose of advancing sustainable technology and promoting its capabilities by representing the University of Michigan in the Promoting Electric Propulsion for Small Craft competition. Our mission is to allow members to apply what they have learned in the classroom and improve themselves as students through hands-on projects in engineering, business, and operations. </p>
                </div>
            </div>
            <div className="w-full h-full">
                <Carousel></Carousel>
            </div>
        </>
    );
}
