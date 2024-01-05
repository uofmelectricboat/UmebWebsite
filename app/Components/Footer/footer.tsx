"use client";
import React from 'react';
import {Button} from "flowbite-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-white w-full text-gray-800 text-center py-4 lg:px-20 sm:px-6 pt-20">
            <div className={"flex"}>
                <div className={"w-1/3"}>
                    <h1 className={"text-2xl font-bold p-5"}>
                        Help turn our future Electric!
                    </h1>
                </div>
                <div className={"w-2/3 flex flex-col text-left space-y-5"}>
                    <p className={"text-xl pt-5 px-5"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className={"text-xl px-5"}>
                        Join us on our Adventures at Sea!
                    </p>
                    <div className={"flex flex-row space-x-5 pl-5 pb-5"}>
                        <Button gradientDuoTone={"purpleToPink"} outline pill> Donate </Button>
                        <Button gradientDuoTone={"purpleToPink"} outline pill> Sponsor Us </Button>
                        <Button gradientDuoTone={"purpleToPink"} outline pill> Join Us </Button>
                    </div>
                </div>
            </div>
            <div className={"w-full border-2 border-black flex justify-center"}>
                <p>
                    Image 1
                </p>
                <p>
                    Image 2
                </p>
                <p>
                    Image 3
                </p>
            </div>
        </footer>
    );
};

export default Footer;
