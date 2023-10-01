"use client";

import  CustomCarousel  from "../Components/CustomCarousel";
import LeaderShip from "../Components/Leadership";

const Leaders = [{
  title: "CAPTAIN",
    name: "Arend Vyn",
    bio: "Arend joined UMEB at first to better understand and learn about what goes into the engineering process. Being a part of the process to create a complex, powerful vehicle with peers and friends is why Electric Boat has been such a big part of his life thus far. Arend is looking forward to working with the team again to design and engineering the most powerful electric boat the world has seen, and have fun doing it.",
    image: "/Members/Arend.JPG",
    info: "Mechanical Engineering | Class of 2025"
}, {
  title: "CHIEF ENGINEER",
    name: "Caroline Kahwati",
    bio: "Caroline joined UMEB to get hands-on experience with an engineering challenge. She enjoys being a part of the process from the design stage to manufacturing the final product and learning from encountered roadblocks to improve future processes. Caroline recognizes the importance of sustainable technologies and enjoys the opportunity to work with electric powertrain systems. Outside of UMEB she enjoys running and watching Michigan sports.",
    image: "/Members/Caroline.jpeg",
    info: "NAME | Class of 2025"
}]


export default function Home() {
  var images = ["/images/cadence.png", "/images/Ford.png", "/images/OurBoats.png"]
    return (
      <><div className='relative'>
        <img src="/images/OurTeams.png" className='w-full'></img>
      </div>
      <CustomCarousel></CustomCarousel>
      <h1 className="font-bold text-5xl py-5 flex items-center justify-center"> Meet Our LeaderShip Team </h1>
      {Leaders.map((leader: { title: any; name: any; bio: any; image: any; info: any; }, index: any) => (
        <LeaderShip
          key={index}
          title={leader.title}
          name={leader.name}
          bio={leader.bio}
          image={leader.image}
          info={leader.info}
        />
      ))}
      <div>
        
      </div>
      </>
    )
  }