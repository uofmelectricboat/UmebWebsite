"use client";
import Link from 'next/link'
import Button from '../buttons';
import { useRouter } from 'next/router'; // Import the useRouter hook
import Container from "../container";
import Logo from "./logo";
import NavLinks from "./navlinks";
import { useState } from 'react';
import DropDown from "../dropdown"

const Navbar = () => {
    const About = [
        {
            "name": "Our Teams",
            "url": "OurTeams"
        },
        {
            "name": "Our Boats",
            "url": "OurBoats"
        },
        {
            "name": "Our Races",
            "url": "OurRaces"
        },
    ];
    const Sponsors = [
        {
            "name": "Current Sponsors",
            "url": "OurSponsors"
        },
        {
            "name": "How to Sponsor Us",
            "url": "HowToSponsorUs"
        }
    ];

    const Contact = [
        {
            "name": "Contact Us",
            "url": "ContactUs"
        },
        {
            "name": "Join Us",
            "url": "JoinUs"
        }
    ];
    return (
    <div className="flex items-center justify-between lg:px-6 xl:px-12">
        <div className="flex items-center py-2">
            <Logo />
        </div>

        <div className="space-x-6 items-center flex">
            <Link href="/" className="rounded text-white border-gray-300 px-2 py-1 hover:bg-gray-400 bg-gray-500"> Home </Link>
            <DropDown title="About Us" options={About}>
            </DropDown>

            <Link href="/Media" className="rounded text-white border-gray-300 px-2 py-1 hover:bg-gray-400 bg-gray-500"> Media </Link>
            
            <DropDown title="Sponsors" options={Sponsors}>
            </DropDown>

            <DropDown title="Contact" options={Contact}>
            </DropDown>

            <Button buttonText="Donate"/>  
        </div>
    </div>
    );
}

export default Navbar;