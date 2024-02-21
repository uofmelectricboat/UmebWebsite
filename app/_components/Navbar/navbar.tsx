"use client";
import Link from 'next/link'
import DropDown from "../dropdown"
import { Menu, X } from "lucide-react";
import { Button } from "flowbite-react"
import  '../../globals.css'
import {useState} from "react";

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
            "name": "Our Sponsors",
            "url": "OurSponsors"
        },
        {
            "name": "Become A Sponsor",
            "url": "BecomeASponsor"
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

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className={""}>
                <div className={"md:block hidden"}>
                    <div className={"flex justify-center items-center space-x-5"}>
                        <Link href={"/"} className="text-2xl font-bold relative animated-underline"> Home </Link>
                        <DropDown title={"About"} options={About}/>
                        <Link href={"/Media"} className="text-2xl font-bold relative animated-underline"> Media </Link>
                        <DropDown title={"Sponsors"} options={Sponsors}/>
                        <DropDown title={"Contact"} options={Contact}/>
                    </div>
                </div>
                <div className={"md:hidden flex justify-center px-5 items-center"}>
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X></X> : <Menu></Menu> }
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className={"fixed inset-0 z-50 bg-white overflow-y-auto lg:hidden text-black"}>
                    <div className="flex justify-end p-5">
                        <button onClick={toggleNavbar}>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <Link href={"/"} className="text-2xl font-bold relative animated-underline" onClick={toggleNavbar}> Home </Link>
                        <Link href={"/OurBoats"} className="text-2xl font-bold relative animated-underline" onClick={toggleNavbar}> Our Boats </Link>
                        <Link href={"/OurTeams"} className="text-2xl font-bold relative animated-underline" onClick={toggleNavbar}> Our Teams </Link>
                        <Link href={"/OurRaces"} className="text-2xl font-bold relative animated-underline" onClick={toggleNavbar}> Our Races </Link>
                        <Link href={"/Media"} className="text-2xl font-bold relative animated-underline" onClick={toggleNavbar}> Media </Link>
                        <Link href={"/OurSponsors"} className="text-2xl font-bold relative animated-underline" onClick={toggleNavbar}> Our Sponsors </Link>
                        <Link href={"/BecomeASponsor"} className="text-2xl font-bold relative animated-underline" onClick={toggleNavbar}> Become A Sponsor </Link>
                        <Link href={"/ContactUs"} className="text-2xl font-bold relative animated-underline" onClick={toggleNavbar}> Contact Us </Link>
                        <Link href={"/JoinUs"} className="text-2xl font-bold relative animated-underline" onClick={toggleNavbar}> Join Us </Link>
                    </div>
                </div>
            )}
        </>

    );
}

export default Navbar;
