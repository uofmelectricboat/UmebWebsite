"use client";

import TitlePhoto from "@/app/Components/TitlePhoto";
import { LinkedInEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';

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
            <div className={"flex justify-center"}>
                <LinkedInEmbed
                    url="https://www.linkedin.com/posts/uofm-electric-boat_the-university-of-michigan-electric-boat-activity-7135314238155231232-T4e0?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy"
                    postUrl="https://www.linkedin.com/posts/uofm-electric-boat_the-university-of-michigan-electric-boat-activity-7135314238155231232-T4e0?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy"
                    width={325}
                    height={570}
                />
            </div>
            <div className={"flex justify-center pt-10"}>
                <InstagramEmbed url="https://www.instagram.com/p/C22laZsgqGQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/Cy8ugl5AliB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/Ct2DGMBA2kL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
            </div>
        </>
    )
}