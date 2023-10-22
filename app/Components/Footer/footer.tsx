"use client";
import Image from 'next/image';
import { Circle } from 'phosphor-react';
import Logo from '../Navbar/logo';

const Footer = () => {
    return (
    <div className="bg-blue-950 w-full">
        <div className="text-center pt-3 pb-8">
            <h1 className="text-white font-bold text-5xl">
                Join us on our Voyage!
            </h1>
        </div>
        <div className="flex items-center justify-center space-x-10 py-3">
            <img src="/logos/UmichEng.png" alt="Umich Engineering" className="max-w-md h-auto"></img>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center"></div>
            <img src="/logos/UmichNaval.png" alt="Umich Naval" className="max-w-md h-auto"></img>
        </div>
        <div className="flex items-center justify-center space-x-12 py-3">
            <img src="/logos/Ford.png" alt="Umich Engineering" className="max-w-sm h-auto"></img>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center"></div>
            <img src="/logos/Siemens.png" alt="Umich Engineering" className="max-w-sm h-auto"></img>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center"></div>
            <img src="/logos/cadence.png" alt="Umich Engineering" className="max-w-sm h-auto"></img>
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center"></div>
            <img src="/logos/Palm.png" alt="Umich Engineering" className="max-w-sm h-auto"></img>
        </div>
        <div className="w-90 h-[3px] bg-white"></div>
        <div className="flex items-center justify-center space-x-12">
            <Logo></Logo>
        </div>
    </div>
    );
}

export default Footer;
