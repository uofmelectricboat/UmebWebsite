"use client";

import TitlePhoto from "@/app/_components/TitlePhoto";
import { LinkedInEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { YouTubeEmbed } from 'react-social-media-embed';

import React from "react";
import {Button} from "flowbite-react";

const titlePhoto = "/TitlePhotos/Media.png?v=2"
const titleText = "Our Media"
export default function Home() {
    return (
        <>
            <TitlePhoto title={titleText} image={titlePhoto}/>
            <div className={"w-full bg-blue-950 flex lg:flex-row flex-col justify-center py-10"}>
                <div className={"w-full lg:w-2/3 text-white space-y-5 px-5"}>
                    <h1 className={"lg:text-5xl md:text-4xl text-3xl text-yellow-400 text-left"}>
                        Social Media
                    </h1>
                    <div className={"lg:text-xl text-lg space-y-5"}>
                        <p>
                            The University of Michigan Electric Boat team is present on some of the most popular social media platforms. Scan the QR code on the right to go to our Linktree and keep up with our progress throughout the year!
                        </p>
                        <p className={""}>
                            We have included some of our latest features down below!
                        </p>
                    </div>
                </div>
                <div className={"flex lg:justify-start justify-center"}>
                    <img src={"/Media/QR.png"} alt={"something"} className={"object-scale-down h-64"}></img>
                </div>
            </div>
            <div className={"w-full bg-stone-200"}>
                <div>
                    <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2 px-5"}>
                        <div className={"md:w-1/4 w-full p-5 md:p-0 relative flex justify-center order-last md:order-first"}>
                            <YouTubeEmbed url="https://www.youtube.com/watch?si=1oxM1LIQmodKoc94&v=BnXNEKXm_Z8&feature=youtu.be" width={325} height={220} />
                        </div>
                        <div className={"w-full lg:w-1/2 pl-2 lg:pl-8 md:pl-6 sm:pl-4"}>
                            <h1 className={"text-2xl lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
                                Cadence Collaboration | YouTube
                            </h1>
                            <p className={"text-lg lg:text-xl text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight"}>
                                Cadence Design Systems has been one of UMEB’s largest sponsors for 2 years. In this video, we discuss how we have utilized Cadence CFD tools to improve our boat’s energy efficiency and propel our team forward.
                            </p>
                        </div>
                    </div>
                    <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2 px-5 "}>
                        <div className={"w-full lg:w-1/2 pl-2 lg:pr-8 md:pr-6 sm:pr-4"}>
                            <h1 className={"text-xl lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
                                A Match Made on North: Rossholes & Nerds | Op-Ed
                            </h1>
                            <p className={"text-lg lg:text-xl text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight"}>
                                Former Business Director and co-founder, Mitchell Davidson, shines a spotlight on an often-overlooked opportunity for U-M students to learn more about the intersection of science, technology, and business: engineering project teams.
                            </p>
                        </div>
                        <div className={"md:w-1/4 w-full p-5 md:p-0 relative flex md:justify-end justify-center"}>
                            <a href={"https://www.michigandaily.com/opinion/wilson-center-a-match-made-on-north-rossholes-and-nerds/"}>
                                <img src={"/Media/Oped.png"} alt={"Image Not Found"} className={"object-scale-down"}></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"flex md:flex-row flex-col justify-center space-y-5 md:space-y-0 space-x-0 md:space-x-10 py-10"}>
                    <div className={"flex justify-center"}>
                        <LinkedInEmbed
                            url="https://www.linkedin.com/embed/feed/update/urn:li:share:7135314237173768192"
                            postUrl="https://www.linkedin.com/posts/uofm-electric-boat_the-university-of-michigan-electric-boat-activity-7135314238155231232-T4e0?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy"
                            width={325}
                            height={570}
                        />
                    </div>
                    <div className={"flex justify-center"}>
                        <LinkedInEmbed
                            url="https://www.linkedin.com/embed/feed/update/urn:li:share:7158200695639199744"
                            postUrl="https://www.linkedin.com/posts/uofm-electric-boat_the-team-at-um-electric-boat-wants-to-extend-activity-7158200696511631360-oPu9?utm_source=share&utm_medium=member_desktop"
                            width={325}
                            height={570}
                        />
                    </div>
                </div>
                <div className={"flex md:flex-row flex-col justify-center space-x-0 md:space-x-10 pb-10"}>
                    <div className={"flex justify-center"}>
                        <InstagramEmbed url="https://www.instagram.com/p/C22laZsgqGQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                    </div>
                    <div className={"flex justify-center"}>
                        <InstagramEmbed url="https://www.instagram.com/p/Cy8ugl5AliB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                    </div>
                    <div className={"flex justify-center"}>
                        <InstagramEmbed url="https://www.instagram.com/p/Ct2DGMBA2kL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                    </div>
                </div>
            </div>
        </>
    )
}