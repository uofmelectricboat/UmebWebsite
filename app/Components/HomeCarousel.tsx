"use client";

import Image from 'next/image';
import { Carousel } from 'flowbite-react';

interface CustomCarouselProps {
}

const carouselInfo = [
    {
        title: "Our Values: Collaboration",
        text:
            "No one member is capable of creating such an ambitious project on their own. UMEB members thrive in the pursuit of over 11 different majors across an array of different colleges and apply the knowledge they learn from said classes on our boat.",
        image: "/images/collaboration.jpg",
    },
    {
        title: "Our Values: Innovation",
        text:
            "No idea is a bad idea. UMEB is a safe place to take risks and fully unleash one's creativity. We offer a chance for members to apply their theoretical skills to an actual project. Of course, with a chance to add their own twist of creativity as well.",
        image: "/images/innovation.jpg",
    },
    {
        title: "Our Values: Adaptability",
        text:
            "UMEB does not settle for less. As such, our designs are ambitious, and our timeline is tight. We often face many setbacks, but we remain undeterred. Adaptability is an integral part of who we are, and it allows us to strive for greatness. We were founded in the uncertain times that were the pandemic, but have grown to what we are today.",
        image: "/images/adapt.JPG",
    },
    {
        title: "Our Values: Sustainability",
        text:
            "We are committed to carbon-neutrality. This commitment to sustainability is deep-seated in UMEB's mission. Our vessels are charged with solar energy, decreasing our reliance on fossil fuels.",
        image: "/images/sustain.JPG",
    },
];

const HomeCarousel: React.FC<CustomCarouselProps> = () => {
    return (
            <Carousel slideInterval={5000}>
                <div className="w-full h-full">
                    <Image src={carouselInfo[0].image} alt="temp" fill={true}/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute top-8 left-10 py-3">
                        <h2 className="text-4xl font-bold text-white">{carouselInfo[0].title}</h2>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-80">
                        <p className="text-center text-2xl text-white">{carouselInfo[0].text}</p>
                    </div>
                </div>
                <div className="w-full h-full">
                    <Image src={carouselInfo[1].image} alt="temp" fill={true}/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute top-8 left-10 py-3">
                        <h2 className="text-4xl font-bold text-white">{carouselInfo[1].title}</h2>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-80">
                        <p className="text-center text-2xl text-white">{carouselInfo[1].text}</p>
                    </div>
                </div>
                <div className="w-full h-full">
                    <Image src={carouselInfo[2].image} alt="temp" fill={true}/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute top-8 left-10 py-3">
                        <h2 className="text-4xl font-bold text-white">{carouselInfo[2].title}</h2>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-80">
                        <p className="text-center text-2xl text-white">{carouselInfo[2].text}</p>
                    </div>
                </div>
                <div className="w-full h-full">
                    <Image src={carouselInfo[3].image} alt="temp" fill={true}/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute top-8 left-10 py-3">
                        <h2 className="text-4xl font-bold text-white">{carouselInfo[3].title}</h2>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center px-80">
                        <p className="text-center text-2xl text-white">{carouselInfo[3].text}</p>
                    </div>
                </div>
            </Carousel>
    );
}

export default HomeCarousel;