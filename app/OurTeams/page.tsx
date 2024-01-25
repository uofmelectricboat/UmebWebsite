"use client";

import LeaderShip from "../Components/Leadership";
import TeamLeader from "../Components/TeamLeader";
import TitlePhoto from "@/app/Components/TitlePhoto";
import Image from "next/image"
import { Button } from "flowbite-react"


const officers = [{
  title: "CAPTAIN",
    name: "Arend Vyn",
    bio: "Arend joined UMEB at first to better understand and learn about what goes into the engineering process. Being a part of the process to create a complex, powerful vehicle with peers and friends is why Electric Boat has been such a big part of his life thus far. Arend is looking forward to working with the team again to design and engineering the most powerful electric boat the world has seen, and have fun doing it.",
    image: "/Members/Arend.JPG",
    info: "Mechanical Engineering | 2025"
}, {
  title: "CHIEF ENGINEER",
    name: "Caroline Kahwati",
    bio: "Caroline joined UMEB to get hands-on experience with an engineering challenge. She enjoys being a part of the process from the design stage to manufacturing the final product and learning from encountered roadblocks to improve future processes. Caroline recognizes the importance of sustainable technologies and enjoys the opportunity to work with electric powertrain systems. Outside of UMEB she enjoys running and watching Michigan sports.",
    image: "/Members/Caroline.jpeg",
    info: "NAME | 2025"
}]

const teamleaders = [{
  title: "MECHANICAL DIRECTOR",
    name: "Evan Branson",
    team: "Meet the Mechanical Team",
    image: "/Members/Evan.jpg",
    info: "Robotics Engineering | 2024"
}, {
  title: "ELECTRICAL DIRECTOR",
    name: "Michael Sharashenidze",
    team: "Meet the Electrical Team",
    image: "/Members/Michael.png",
    info: "Electrical Engineering | 2024"
},
{
  title: "BUSINESS DIRECTOR",
    name: "Prahlad Pant",
    team: "Meet the Business Team",
    image: "/Members/Prah.png",
    info: "Business Administration | 2026"
},
{
  title: "OPERATIONS DIRECTOR",
    name: "Lyn Tran",
    team: "Meet the Operations Team",
    image: "/Members/Prah.png",
    info: "NAME | 2026"
}]

const consultants = [{
  title: "WEB DESIGN & DEVELOPMENT",
    name: "Alec Palo",
    team: "",
    image: "/Members/Arend.JPG",
    info: "Computer Science & Business | 2024"
}, {
  title: "WEB DEVELOPMENT",
    name: "Grace Dwyer",
    team: "",
    image: "/Members/Caroline.jpeg",
    info: "SoI - Information Analytics | 2023"
}, {
  title: "HEAD FACULTY ADVISOR",
    name: "Krzysztof Fidkowski",
    team: "",
    image: "/Members/Caroline.jpeg",
    info: "Associate Professor, Graduate Program Chair | Aerospace Engineering Department"
}]

const titlePhoto = "/images/OurTeams.png"
const titleText = "Our Teams"

export default function Home() {
  var images = ["/images/cadence.png", "/images/Ford.png", "/images/OurBoats.png"]
    return (
      <>
      <TitlePhoto title={titleText} image={titlePhoto}/>
      <div className="w-full bg-stone-100">
        <div className={"w-full flex flex-col md:flex-row justify-center items-center lg:py-6 py-2 md:py-4 "}>
          <div className={"w-1/4 relative order-last md:order-first"}>
            <img src={"/images/OurRacesGraphic.png"} alt={"Image Not Found"} className={"object-scale-down"}></img>
          </div>
          <div className={"w-full lg:w-1/2 pl-2 lg:pl-8 md:pl-6 sm:pl-4"}>
            <h1 className={"text-base lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
              Mechanical
            </h1>
            <p className={"text-xs lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight"}>
              The UMEB Mechanical Team is responsible for the component-level design, manufacturing, testing, and validation of all structural, drivetrain, and safety systems on the boat. Additionally, the mechanical team works closely with electrical team leadership to make system-level decisions on the design of the boat and assures all systems on the boat operate cohesively. On top of working on and designing the boat, the mechanical team will focus extensively on the growth of the overall team`&lsquo;`s CAD and manufacturing capabilities.
            </p>
            <div className={"py-2 flex md:justify-end justify-center"}>
              <Button gradientDuoTone={"purpleToPink"} outline className={""}>Join the Mechanical Team!</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className={"w-full flex flex-col md:flex-row justify-center items-center lg:py-6 py-2 md:py-4 "}>
          <div className={"w-full lg:w-1/2 pl-2 lg:pl-8 md:pl-6 sm:pl-4"}>
            <h1 className={"text-base lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
              Electrical
            </h1>
            <p className={"text-xs lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight"}>
              The UMEB Mechanical Team is responsible for the component-level design, manufacturing, testing, and validation of all structural, drivetrain, and safety systems on the boat. Additionally, the mechanical team works closely with electrical team leadership to make system-level decisions on the design of the boat and assures all systems on the boat operate cohesively. On top of working on and designing the boat, the mechanical team will focus extensively on the growth of the overall team`&lsquo;`s CAD and manufacturing capabilities.
            </p>
            <div className={"py-2"}>
              <Button gradientDuoTone={"purpleToPink"} outline >Join the Electrical Team!</Button>
            </div>
          </div>
          <div className={"w-1/4 relative flex md:justify-end justify-center"}>
            <img src={"/images/OurRacesGraphic.png"} alt={"Image Not Found"} className={"object-scale-down"}></img>
          </div>
        </div>
      </div>
      <div className="w-full bg-stone-100">
        <div className={"w-full flex flex-col md:flex-row justify-center items-center lg:py-6 py-2 md:py-4 "}>
          <div className={"w-1/4 relative order-last md:order-first"}>
            <img src={"/images/OurRacesGraphic.png"} alt={"Image Not Found"} className={"object-scale-down"}></img>
          </div>
          <div className={"w-full lg:w-1/2 pl-2 lg:pl-8 md:pl-6 sm:pl-4"}>
            <h1 className={"text-base lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
              Operations
            </h1>
            <p className={"text-xs lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight"}>
              The Operations Subteam is responsible for managing the logistical demands of the Michigan Electric Boat Team, including the maintenance of the Wilson Center workspace(s), organization and design reviews, and communication with competition(s) and competition sponsors. Additionally, the subteam handles the standard operating procedures and safety procedures with the Manufacturing Coordinator to promote a productive and efficient working environment. Lastly, the Operations Subteam manages the general recruitment, logistics, and communications within the team.
            </p>
            <div className={"py-2 flex md:justify-end justify-center"}>
              <Button gradientDuoTone={"purpleToPink"} outline>Join the Operations Team!</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className={"w-full flex flex-col md:flex-row justify-center items-center lg:py-6 py-2 md:py-4 "}>
          <div className={"w-full lg:w-1/2 pl-2 lg:pl-8 md:pl-6 sm:pl-4"}>
            <h1 className={"text-base lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
              Business
            </h1>
            <p className={"text-xs lg:text-lg text-blue-950 md:text-base sm:text-xs tracking-tight leading-tight"}>
              UMEB’s business team is responsible for supporting our engineers in all other tasks ranging from sponsor relations to marketing the team on various platforms. We strive to prevent our engineers from lacking any resources that would limit their innovation. Each year, we raise tens of thousands of dollars in order to build the fastest boat possible.
            </p>
            <div className={"py-2"}>
              <Button gradientDuoTone={"purpleToPink"} outline >Join the Electrical Team!</Button>
            </div>
          </div>
          <div className={"w-1/4 relative flex md:justify-end justify-center"}>
            <img src={"/images/OurRacesGraphic.png"} alt={"Image Not Found"} className={"object-scale-down"}></img>
          </div>
        </div>
      </div>
      <h1 className="font-bold lg:text-5xl md:text-2xl sm:text-xl py-5 flex items-center justify-center bg-stone-100"> Meet Our LeaderShip Team </h1>
      <div className="p-10 bg-stone-100">
        {officers.map((leader: { title: any; name: any; bio: any; image: any; info: any; }, index: any) => (
          <LeaderShip
            key={index}
            title={leader.title}
            name={leader.name}
            bio={leader.bio}
            image={leader.image}
            info={leader.info}
          />
        ))}
      </div>
      <div className="columns-xs sm:columns-1 md:columns-2 lg:columns-2 gap-5 bg-stone-100">
        {teamleaders.map((leader: any, index: any) => (
          <TeamLeader
            key={index}
            title={leader.title}
            name={leader.name}
            team={leader.team}
            image={leader.image}
            info={leader.info}
          />
        ))}
      </div>
      <h1 className="font-bold text-5xl py-5 flex items-center justify-center pt-10 bg-stone-100"> Meet Our Consultants </h1>
      <div className="columns-xs lg:columns-3 sm:columns-1 gap-5 bg-stone-100 text-blue-950">
        {consultants.map((leader: any, index: any) => (
          <TeamLeader
            key={index}
            title={leader.title}
            name={leader.name}
            team={leader.team}
            image={leader.image}
            info={leader.info}
          />
        ))}
      </div>
      <h1 className="font-bold text-5xl pt-20 py-5 flex items-center justify-center bg-stone-100"> Our Alumni </h1>
      <div className="flex flex-col justify-center items-center bg-stone-100">
        <p className="text-center max-w-prose text-2xl leading-relaxed tracking-wider">These are only some of the prestigious firms that UMEB alumni have gone on to work for after graduation. UMEB members have pursued career opportunities across a diverse array of industries including naval architecture, automotive, aerospace, investment banking, consulting, and many more. UMEB has an extensive network and mentorship opportunities for students across all majors and passions.</p>

      </div>
      <div className={"hidden lg:block py-20 bg-stone-100"}>
        <div className="gap-8 columns-4 mx-10">
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/BMO.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/FordTeams.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/AirProducts.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/Chevron.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/Regent.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/F1.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/Ingals.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/SpaceX.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/T&C.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/Arc.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/Rivian.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/Hec.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/GMTeams.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/Dolphins.png"} alt={"image"} width={300} height={300}></Image>
          </div>
          <div className={"flex justify-center py-5"}>
            <Image src={"/logos/SafeWay.png"} alt={"image"} width={300} height={300}></Image>
          </div>
        </div>
      </div>
      </>
    )
  }