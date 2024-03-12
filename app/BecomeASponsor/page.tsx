"use client";
import Image from "next/image";
import TitlePhoto from "@/app/_components/TitlePhoto";
import EmailForm from "@/app/_components/EmailForm";
import Button from "../_components/Button";
import React from "react";


const HowToSponsor = [{
    image: "/Icons/CheckMark.png",
    title: "First Steps",
    text: "Read Sponsor Packet and complete our contact form (or email electricboat@umich.edu)"
}, {
    image: "/Icons/Clock.png",
    title: "Wait For Response",
    text: "Our leadership team will reach out in 48-72 hours"
}, {
    image: "/Icons/Handshake.png",
    title: "Sponsorship Agreement",
    text: "Complete U-M gift documentation and sponsorship agreement to become an official sponsor"
}];

const SponsorPackageImg = "/Sponsors/SponsorPackage.png"
const titlePhoto = "/TitlePhotos/BecomeASponsor.jpg"
const titleText = "Become a Sponsor"

const onButtonClick = () => {
    const pdfUrl = "/Sponsors/SponsorPacket2024.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "/Sponsors/SponsorPacket2024.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default function Home() {
    return (
        <>
            <TitlePhoto title={titleText} image={titlePhoto}/>
            <div className="flex justify-center">
                <div className="lg:w-1/2 w-full text-center">
                    <h1 className="font-bold lg:text-4xl md:text-2xl text-xl pt-10">
                        Welcome Prospective Sponsor!
                    </h1>
                    <div className="lg:text-2xl md:text-lg py-10 leading-loose space-y-8">
                        <p>
                            Over the course of our short history, our team has had dozens of corporate, public, and
                            private sponsors. Our partnerships have ranged from Fortune 500 companies to small,
                            Michigan-based corporations. We welcome any cash or in-kind donations.
                        </p>
                        <p>
                            In-kind donations have included machining/assembly assistance, non-engineering donations
                            (apparel, sport drinks, water bottles, etc.), material donations (metal, parts, etc.), and
                            much more!
                        </p>
                        <p>
                            If you think you or your company could help us grow and continue to make new waves in the
                            field of naval engineering, please reach out! We would love to hear from you and will
                            respond within 24 hours.
                        </p>
                        <p>
                            We would love to have you aboard!
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-blue-950 relative flex lg:flex-row flex-col w-full">
                {HowToSponsor.map((info: { text: any; title: any; image: any; }, index: number) => (
                    <div key={index}
                         className="lg:w-1/3 w-full text-center lg:px-20 md:px-10 px-6 lg:py-20 md:py-10 py-5">
                        <Image src={info.image} alt="img" width={125} height={125} className="mx-auto"/>
                        <h1 className="lg:text-4xl md:text-2xl text-xl text-yellow-500 font-bold lg:py-10 md:py-4 py-2">
                            {info.title}
                        </h1>
                        <p className="lg:text-2xl md:text-lg text-white lg:py-10 md:py-4 py-2">
                            {info.text}
                        </p>
                    </div>
                ))}
            </div>
            <div>
                <iframe src="https://player.flipsnack.com?hash=QjY4OEFFODhCN0Erems4YjhmbTFjaQ==" width="100%"
                        height="480"
                        scrolling="no" frameBorder="0" allowFullScreen
                        allow="autoplay; clipboard-read; clipboard-write"></iframe>
            </div>
            <div className="relative w-full">
                <div className="flex md:flex-row flex-col md:py-10 py-5 justify-center space-y-5">
                    <div className="md:w-1/2 w-full flex justify-center items-center">
                        <a onClick={onButtonClick} className={"cursor-pointer hover:text-white text-blue-900"}>
                            <div
                                className={"h-12 w-96 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 p-1 hover:scale-105 duration-300"}>
                                <div
                                    className="flex h-full w-full items-center rounded-lg justify-center bg-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-600 hover:to-pink-500">
                                    <h1 className="text-xl">
                                        Download Our Sponsorship Packet
                                    </h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="md:w-1/2 w-full flex justify-center items-center">
                        <Button width={64} text={"Contact Us!"} href={"/ContactUs"}></Button>
                    </div>
                </div>
            </div>
            <div className="relative w-full lg:py-20 py-10 space-y-10">
                <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-center">
                    Become a Sponsor!
                </h1>
                <div className="mx-auto w-full lg:w-1/2 px-10">
                    <EmailForm/>
                </div>
            </div>
        </>
    )
}