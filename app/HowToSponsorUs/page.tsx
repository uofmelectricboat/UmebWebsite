import Image from "next/image";
import Boat from "@/app/Components/Boats";

const HowToSponsor = [{
    image: "/Icons/CheckMark.png",
    title: "First Steps",
    text: "Read Sponsor Packet and complete our contact form (or email electricboat@umich.edu)"
}, {
    image: "/Icons/Clock.png",
    title: "First Steps",
    text: "Our leadership team will reach out in 48-72 hours"
}, {
    image: "/Icons/Handshake.png",
    title: "Sponsorship Agreement",
    text: "Complete U-M gift documentation and sponsorship agreement to become an official sponsor"
}]

const SponsorPackageImg = "/images/SponsorPackage.png"
const titlePhoto = "/images/HowToSponsorUs.jpg"

export default function Home() {
    return (
    <>
        <div className='relative'>
            <img src={titlePhoto} className='w-full h-screen object-cover'></img>
            <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-white text-6xl font-bold">How to Become a Sponsor</h1>
            </div>
        </div>
        <div className="flex py-10 relative w-full">
            <div className="w-1/2">
                <img src="/images/HowToBecomeASponsorImg.png" alt="image" className="w-full"/>
            </div>
            <div className="w-1/2 px-10">
                <h1 className="font-bold text-6xl">
                    Welcome Prospective Sponsor!
                </h1>
                <p className="text-4xl py-10">
                    Over the course of our short history, our team has had dozens of corporate, public, and private sponsors. Our partnerships have ranged from Fortune 500 companies to small, Michigan-based corporations. We welcome any cash or in-kind donations.
                </p>
                <p className="text-4xl py-10">
                    In-kind donations have included machining/assembly assistance, non-engineering donations (apparel, sport drinks, water bottles, etc.), material donations (metal, parts, etc.), and much more!
                </p>
                <p className="text-4xl py-10">
                    If you think you or your company could help us grow and continue to make new waves in the field of naval engineering, please reach out! We would love to hear from you and will respond within 24 hours.
                </p>
                <p className="text-4xl py-10">
                    We would love to have you aboard!
                </p>
            </div>
        </div>
        <div className="bg-blue-950 relative flex w-full">
            {HowToSponsor.map((info: { text: any; title: any; image: any; }, index: number) => (
                <div key={index} className="w-1/3 text-center px-20 py-20">
                    <Image src={info.image} alt="img" width={125} height={125} className="mx-auto" />
                    <h1 className="text-4xl text-yellow-500 font-bold py-10">
                        {info.title}
                    </h1>
                    <p className="text-2xl text-white py-10">
                        {info.text}
                    </p>
                </div>
            ))}
        </div>
        <div className="relative w-full">
            <Image src={SponsorPackageImg} alt="image" className="p-10" height={800} width={2000}></Image>
            <div className="flex pb-10 justify-center">
                <div className="w-1/2 flex justify-center items-center">
                    <button className="bg-gray-300 text-black py-2 px-4 rounded font-bold text-2xl w-400">
                        Download our Sponsorship Packet
                    </button>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <button className="bg-gray-300 text-black py-2 px-4 rounded font-bold text-2xl w-400">
                        Contact Us!
                    </button>
                </div>
            </div>
        </div>
        <div className="relative w-full">
            <h1 className="text-6xl font-bold text-center">
                Become a Sponsor!
            </h1>
        </div>
    </>
    )
}