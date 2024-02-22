"use client";
import React from 'react';
import {Button} from "flowbite-react";
import { SocialIcon } from 'react-social-icons';
import Image from "next/image"

const Footer: React.FC = () => {
    return (
        <footer className="bg-white w-full text-gray-800 text-center py-4 lg:px-20 sm:px-6">
            <div className={"flex lg:flex-row flex-col justify-between"}>
                <div className={"lg:basis-1/3 items-center flex justify-center lg:justify-start"}>
                    <h1 className={"md:text-2xl text-xl font-bold lg:p-5 p-2 text-left"}>
                        Help turn our future Electric!
                    </h1>
                </div>
                <div className={"lg:basis-1/3 flex justify-center lg:justify-end md:block hidden"}>
                    <Image src={"/Icons/mdLogo.png"} alt={"LOGO"} width={300} height={200}></Image>
                </div>
            </div>
            <div className={"flex flex-col lg:flex-row items-center justify-center lg:space-x-20 space-y-5 lg:space-y-0 w-full"}>
                <div className={"flex justify-center"}>
                    <Image src={"/Companies/Skater.jpg"} alt={"cadence"} width={200} height={200} className={"object-scale-down"}></Image>
                </div>
                <div className={"flex justify-center"}>
                    <Image src={"/Companies/Liberator_Logo.png"} alt={"liberator"} width={200} height={200} className={"object-scale-down"}></Image>
                </div>
                <div className={"flex justify-center"}>
                    <Image src={"/Companies/EYHorizontal.png"} alt={"EY"} width={200} height={200} className={"object-scale-down"}></Image>
                </div>
            </div>
            <div className={"flex md:justify-between justify-center items-center pt-10 px-5"}>
                <div className={"lg:space-x-2 space-x-1 flex flex-wrap"}>
                    <SocialIcon network={"linkedin"} url={""}></SocialIcon>
                    <SocialIcon network={"youtube"} url={""}></SocialIcon>
                    <SocialIcon network={"instagram"} url={""}></SocialIcon>
                </div>
                <div className={"md:block hidden"}>
                    <h1 className={"text-blue-900 md:text-xl text-normal"}>
                        Made by Alec Palo
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
