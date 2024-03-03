"use client";
import React from 'react';
import { FaYoutube, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Image from "next/image"

const Footer: React.FC = () => {
    return (
        <footer className="bg-white w-full text-gray-800 text-center py-4 lg:px-20 sm:px-6">
            <div className={"flex justify-center"}>
                <h1 className={"md:text-2xl text-xl font-bold lg:p-5 p-2 text-left"}>
                    Help turn our future Electric!
                </h1>
            </div>
            <div className={"flex flex-col lg:flex-row items-center justify-center lg:space-x-20 space-y-5 lg:space-y-0 w-full pb-8"}>
                <a className={"flex justify-center hover:scale-105 transition duration-300"} href={""}>
                    <Image src={"/Companies/Skater.jpg"} alt={"cadence"} width={200} height={200} className={"object-scale-down"}></Image>
                </a>
                <a className={"flex justify-center hover:scale-105 transition duration-300"} href={""}>
                    <Image src={"/Companies/Liberator_Logo.png"} alt={"liberator"} width={200} height={200} className={"object-scale-down"}></Image>
                </a>
                <a className={"flex justify-center hover:scale-105 transition duration-300"} href={""}>
                    <Image src={"/Companies/EYHorizontal.png"} alt={"EY"} width={200} height={200} className={"object-scale-down"}></Image>
                </a>
                <a className={"flex justify-center hover:scale-105 transition duration-300"} href={""}>
                    <Image src={"/Companies/Cadence.png"} alt={"EY"} width={200} height={200} className={"object-scale-down"}></Image>
                </a>
            </div>
            <div className={"w-full flex justify-center"}>
                <hr className={"border-t-2 w-full border-blue-950"}/>
            </div>
            <div className={"flex md:justify-between justify-center items-center pt-2 px-5"}>
                <div className={"md:block hidden"}>
                    <Image src={"/Icons/mdLogo.png"} alt={"LOGO"} width={300} height={200}></Image>
                </div>
                <div className={"lg:space-x-2 space-x-1 flex flex-wrap"}>
                    <FaTwitter size={50} href={""} className={"cursor-pointer hover:scale-105 transition duration-300"}></FaTwitter>
                    <FaFacebook size={50} href={""} className={"cursor-pointer hover:scale-105 transition duration-300"}></FaFacebook>
                    <FaLinkedin size={50} href={""} className={"cursor-pointer hover:scale-105 transition duration-300"}></FaLinkedin>
                    <FaYoutube size={50} href={""} className={"cursor-pointer hover:scale-105 transition duration-300"}></FaYoutube>
                    <FaInstagram size={50} href={""} className={"cursor-pointer hover:scale-105 transition duration-300"}></FaInstagram>
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
