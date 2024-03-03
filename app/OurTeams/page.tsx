"use client";

import LeaderShip from "@/app/_components/Teams/Leadership";
import TeamLeader from "@/app/_components/Teams/TeamLeader";
import TitlePhoto from "@/app/_components/TitlePhoto";
import Image from "next/image"


const officers = [{
    title: "CAPTAIN",
    name: "Arend Vyn",
    bio: "Arend joined UMEB at first to better understand and learn about what goes into the engineering process. Being a part of the process to create a complex, powerful vehicle with peers and friends is why Electric Boat has been such a big part of his life thus far. Arend is looking forward to working with the team again to design and engineering the most powerful electric boat the world has seen, and have fun doing it.",
    image: "/Teams/headshots/Arend_Captain.jpg",
    info: "Mechanical Engineering | 2025",
    LinkedIn: "https://www.linkedin.com/in/arend-vyn/",
}, {
    title: "CHIEF ENGINEER",
    name: "Caroline Kahwati",
    bio: "Caroline joined UMEB to get hands-on experience with an engineering challenge. She enjoys being a part of the process from the design stage to manufacturing the final product and learning from encountered roadblocks to improve future processes. Caroline recognizes the importance of sustainable technologies and enjoys the opportunity to work with electric powertrain systems. Outside of UMEB she enjoys running and watching Michigan sports.",
    image: "/Teams/headshots/Kahwati_Caroline_Headshot.jpg",
    info: "NAME | 2025",
    LinkedIn: "https://www.linkedin.com/in/ckahwati/",
}]

const teamleaders = [{
    title: "MECHANICAL DIRECTOR",
    name: "Evan Branson",
    LinkedIn: "https://www.linkedin.com/in/evan-branson-5240651b0/",
    image: "/Teams/headshots/Evan_Mechanical_Director.jpg",
    info: "Robotics Engineering | 2024"
}, {
    title: "ELECTRICAL DIRECTOR",
    name: "Michael Sharashenidze",
    LinkedIn: "https://www.linkedin.com/in/lyn-n-tran/",
    image: "/Teams/headshots/Michael_Electrical_Director.jpg",
    info: "Electrical Engineering | 2024"
}, {
    title: "OPERATIONS DIRECTOR",
    name: "Lyn Tran",
    LinkedIn: "https://www.linkedin.com/in/michael-sharashenidze-71b53318a/",
    image: "/Teams/headshots/Lyn_Operations_Director.jpg",
    info: "N.A.M.E. | 2026"
}]

const TeamLeadersTwo = [{
    title: "BUSINESS DIRECTOR",
    name: "Kaden Murphy",
    LinkedIn: "https://www.linkedin.com/in/yaseen-metwally-745067216/",
    image: "/Teams/headshots/Kaden_Business_CoDirector.jpg",
    info: "Business Administration | 2026"
}, {
    title: "BUSINESS DIRECTOR",
    name: "Yaseen Metwally",
    LinkedIn: "https://www.linkedin.com/in/kaden-murphy/",
    image: "/Teams/headshots/Yaseen_Business_CoDirector.jpg",
    info: "Business Administration | 2026"
}]

const consultants = [{
    title: "WEB DESIGN & DEVELOPMENT",
    name: "Alec Palo",
    LinkedIn: "https://www.linkedin.com/in/apalo/",
    image: "/Teams/headshots/Alec.jpg",
    info: "Computer Science & Business | 2024"
}, {
    title: "FACULTY ADVISOR",
    name: "Dave Signer",
    LinkedIn: "https://name.engin.umich.edu/people/singer-david-j/",
    image: "/Teams/headshots/Dave.jpg",
    info: "Associate Professor | N.A.M.E"
}, {
    title: "HEAD FACULTY ADVISOR",
    name: "Krzysztof Fidkowski",
    LinkedIn: "https://aero.engin.umich.edu/people/fidkowski-krzysztof/",
    image: "/Teams/headshots/Krzystof.jpg",
    info: "Associate Professor, Graduate Program Chair | Aerospace Engineering Department"
}]

const titlePhoto = "/Teams/Full_Team_pic.jpg"
const titleText = "Our Teams"

export default function Home() {
    return (
        <>
            <TitlePhoto title={titleText} image={titlePhoto}/>
            <div className="w-full bg-stone-100">
                <div className={"w-full flex flex-col lg:flex-row justify-center items-center md:py-6 py-2"}>
                    <div className={"lg:w-1/4 w-full p-5 lg:p-0 flex justify-center relative order-last lg:order-first"}>
                        <Image src={"/Teams/Mechanical_Team_Pic.png"} alt={"Image Not Found"} width={500} height={500}></Image>
                    </div>
                    <div className={"w-full lg:w-1/2 lg:pl-8 px-5 sm:px-10 md:px-20 lg:px-0 tracking-tight leading-relaxed"}>
                        <h1 className={"text-2xl lg:text-4xl text-blue-900 font-bold pb-2"}>
                            Mechanical
                        </h1>
                        <p className={"text-xl text-blue-950"}>
                            The UMEB Mechanical Team is responsible for the component-level design, manufacturing, testing, and validation of all structural, drivetrain, mechatronics, and safety systems on the boat. Additionally, the Mechanical Team works closely with the Electrical Team to make system-level decisions on the design of the boat and assures all systems on the boat operate cohesively.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white">
                <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2"}>
                    <div className={"w-full lg:w-1/2 lg:pr-8 px-5 sm:px-10 md:px-20 lg:px-0 tracking-tight leading-relaxed"}>
                        <h1 className={"text-2xl lg:text-4xl text-blue-900 font-bold pb-2"}>
                            Electrical
                        </h1>
                        <p className={"text-xl text-blue-950"}>
                            The UMEB Electrical Team is responsible for the design, integration, testing, and validation of all powertrain, controls, and software systems on the boat. Like the Mechanical team, the Electrical Team works closely with the Mechanical Team to ensure the overall success and safety of the boat, driver, and surroundings.
                        </p>
                    </div>
                    <div className={"lg:w-1/4 w-full p-5 lg:p-0 relative flex lg:justify-end justify-center"}>
                        <Image src={"/Teams/Electrical_Team_Pic.JPG"} alt={"Image Not Found"} width={500} height={500}></Image>
                    </div>
                </div>
            </div>
            <div className="w-full bg-stone-100">
                <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2"}>
                    <div className={"lg:w-1/4 w-full p-5 lg:p-0 flex justify-center relative order-last lg:order-first"}>
                        <Image src={"/Teams/Operations_Team_Pic.jpg"} alt={"Image Not Found"} width={500} height={500}></Image>
                    </div>
                    <div className={"w-full lg:w-1/2 px-5 sm:px-10 md:px-20 lg:px-0 lg:pl-8 tracking-tight leading-relaxed"}>
                        <h1 className={"text-2xl lg:text-4xl text-blue-900 font-bold pb-2"}>
                            Operations
                        </h1>
                        <p className={"text-xl text-blue-950"}>
                            The UMEB Operations Team is responsible for managing the logistical demands of the Michigan Electric Boat Team, including the maintenance of the Wilson Center workspace, team organization, and event logistics. Additionally, the Operations Team handles the standard operating procedures and safety procedures to promote an efficient working environment.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white">
                <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2"}>
                    <div className={"w-full lg:w-1/2 px-5 sm:px-10 md:px-20 lg:px-0 lg:pr-8 lg:pr-6 tracking-tight leading-relaxed"}>
                        <h1 className={"text-2xl lg:text-4xl text-blue-900 font-bold pb-2"}>
                            Business
                        </h1>
                        <p className={"text-lg text-blue-950"}>
                            The UMEB Business Team is responsible for supporting our engineers in all tasks ranging from sponsor relations to marketing. We strive to aid our engineers from lacking any resources that would limit their innovation. Each year, we raise tens of thousands of dollars in order to build the fastest boat possible.
                        </p>
                    </div>
                    <div className={"lg:w-1/4 w-full p-5 lg:p-0 relative flex lg:justify-end justify-center"}>
                        <Image src={"/Teams/Business_Team_Pic.jpg"} alt={"Image Not Found"} width={500} height={500}></Image>
                    </div>
                </div>
            </div>
            <h1 className="font-bold lg:text-4xl text-2xl pt-10 flex items-center justify-center bg-stone-100">
                Meet Our LeaderShip Team
            </h1>
            <div className="px-10 bg-stone-100">
                {officers.map((leader: { title: any; name: any; bio: any; image: any; info: any; LinkedIn: any; }, index: any) => (
                    <LeaderShip
                        key={index}
                        title={leader.title}
                        name={leader.name}
                        bio={leader.bio}
                        image={leader.image}
                        info={leader.info}
                        LinkedIn={leader.LinkedIn}
                    />
                ))}
            </div>
            <div className="bg-stone-100">
                <div className="w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-5">
                    {teamleaders.map((leader: any, index: any) => (
                        <TeamLeader
                            key={index}
                            title={leader.title}
                            name={leader.name}
                            LinkedIn={leader.LinkedIn}
                            image={leader.image}
                            info={leader.info}
                        />
                    ))}
                </div>
                <div className="w-full justify-center grid-cols-1 md:grid-cols-2 grid gap-5">
                    {TeamLeadersTwo.map((leader: any, index: any) => (
                        <TeamLeader
                            key={index}
                            title={leader.title}
                            name={leader.name}
                            LinkedIn={leader.LinkedIn}
                            image={leader.image}
                            info={leader.info}
                        />
                    ))}
                </div>
            </div>
            <h1 className="font-bold lg:text-4xl text-2xl py-5 flex items-center justify-center pt-10 bg-stone-100">
                Meet Our Consultants
            </h1>
            <div className="lg:columns-3 columns-1 gap-5 bg-stone-100 text-blue-950">
                {consultants.map((leader: any, index: any) => (
                    <TeamLeader
                        key={index}
                        title={leader.title}
                        name={leader.name}
                        LinkedIn={leader.LinkedIn}
                        image={leader.image}
                        info={leader.info}
                    />
                ))}
            </div>
            <h1 className="font-bold lg:text-4xl text-2xl pt-10 pb-5 flex items-center justify-center bg-stone-100"> Our Alumni </h1>
            <div className="flex flex-col justify-center items-center bg-stone-100 pb-10">
                <p className="lg:text-center text-left max-w-prose lg:text-2xl text-lg leading-relaxed px-5">
                    These are only some of the prestigious firms that UMEB alumni have gone on to work for after graduation. UMEB members have pursued career opportunities across a diverse array of industries including naval architecture, automotive, aerospace, investment banking, consulting, and many more. UMEB has an extensive network and mentorship opportunities for students across all majors and passions.
                </p>
            </div>
            <div className={"hidden lg:block py-20 bg-stone-100"}>
                <div className="gap-8 columns-4 mx-10">
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/BMO.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/Ford.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/AirProducts.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/Chevron.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/Regent.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/F1.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/Ingalls.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/SpaceX.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/T&Co.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/Arc.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/Rivian.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/HEC.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/GM.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/Dolphins.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                    <div className={"flex justify-center py-5"}>
                        <Image src={"/Companies/BrandSafeway.png"} alt={"image"} width={300} height={300}></Image>
                    </div>
                </div>
            </div>
        </>
    )
}