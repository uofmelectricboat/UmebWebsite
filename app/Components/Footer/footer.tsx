"use client";
import React from 'react';
import {Button} from "flowbite-react";
import { SocialIcon } from 'react-social-icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white w-full text-gray-800 text-center py-4 lg:px-20 sm:px-6">
            <div className={"flex lg:flex-row flex-col"}>
                <div className={"lg:w-1/3 w-full items-center flex justify-center lg:justify-start"}>
                    <h1 className={"text-2xl font-bold lg:p-5 p-2 text-left"}>
                        Help turn our future Electric!
                    </h1>
                </div>
                <div className={"w-full md:w-2/3 flex lg:justify-end justify-center space-x-2 items-center"}>
                    <Button gradientDuoTone={"purpleToPink"} outline pill> Donate </Button>
                    <Button gradientDuoTone={"purpleToPink"} outline pill> Sponsor Us </Button>
                    <Button gradientDuoTone={"purpleToPink"} outline pill> Join Us </Button>
                </div>
            </div>
            <div className={"flex justify-between items-center pt-5 px-5"}>
                <div className={"lg:space-x-2 space-x-1 flex flex-wrap"}>
                    <SocialIcon network={"linkedin"} url={""}></SocialIcon>
                    <SocialIcon network={"youtube"} url={""}></SocialIcon>
                    <SocialIcon network={"instagram"} url={""}></SocialIcon>
                </div>
                <div>
                    <h1 className={"text-blue-900 md:text-xl text-normal"}>
                        Made by Alec Palo
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
