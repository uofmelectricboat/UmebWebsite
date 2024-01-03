"use client";
import Link from 'next/link'
import Button from '../buttons';
import Logo from "./logo";
import DropDown from "../dropdown"
import  '../../globals.css'

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
    <div className="">
        {/*<div className="flex items-center py-2">*/}
        {/*    <Logo />*/}
        {/*</div>*/}

        {/*<div className="space-x-6 items-center flex">*/}






        {/*</div>*/}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Logo />
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                    <li>
                        <Link href="/" className="text-2xl font-bold relative animated-underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <DropDown title="About Us" options={About}></DropDown>
                    </li>
                    <li>
                        <Link href="/Media" className="text-2xl font-bold relative animated-underline">
                            Media
                        </Link>
                    </li>
                    <li>
                        <DropDown title="Sponsors" options={Sponsors}></DropDown>
                    </li>
                    <li>
                        <DropDown title="Contact" options={Contact}></DropDown>
                    </li>
                    <li>
                        <Button buttonText="Donate" Ref="/Donate"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Navbar;
