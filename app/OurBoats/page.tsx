import TitlePhoto from "@/app/Components/TitlePhoto";
import Timeline from "../Components/Timeline"

const boats = [{
    text: "Proteus was where it all began for UMEB. The 17-ft catamaran hull was repurposed from the 2016 Rio Olympics, and the 1970’s-era outboard motor was converted to run on electric power. Despite the COVID lockdown and limited workspace, the team persevered and decided to build Proteus outdoors, braving harsh weather conditions, including snow, rain, and summer heat. Piloted by the team’s Chief Engineer, Sean Hickey, Proteus finished second at the 2021 Promoting Electric Propulsion completion. This was an impressive feat given that it was UMEB’s first time participating in any competition. ",
    name: "Proteus",
    speed: "12mph",
    image: "/images/OurBoatsProteus.png",
    performance: "31 hp",
    year: "2020"
}, {
    text: "Snowfinkle is a next generation racing craft, utilizing hydrofoil technology to lift the boat out of the water and achieve flight. The 17 foot winged vessel glides through the water, remotely piloted and stabilized by a passive control system as well as active control surfaces on the foils themselves. Snowfinkle participated at the 2022 and 2023 Promoting Electric Propulsion Competition, but unfortunately did not place in the top 3 ",
    name: "Snowfinkle",
    speed: "30mph",
    image: "/images/OurBoatsSnowfinkle.png",
    performance: "48 hp",
    year: "2020"
}, {
    text: "Named after our former Captain, The Parmar was the vessel we took to the Promoting Electric Propulsion competition! Though we had many setbacks with Snowfinkle, we spent the last three days before we left for the competition building this new vessel to compete. The Parmar raced slightly over 3.5 miles (a mile for every day we worked on it!) and was the last vessel on the water when the end timer for our heat rang. It is composed of donated parts from the University of Michigan’s Naval Architecture & Marine Engineering department as well as components from one of our old vessels, Proteus. While it does not showcase our intended design plan for the year, it does demonstrate the innovation and dedication our engineering team had.",
    name: "The Parmar",
    speed: "0",
    image: "/images/OurBoatsParmar.png",
    performance: "0",
    year: "2020"
}, {
    text: "Our internal name for the 2024-2026 design cycle vessel is BMBF. While we were originally planning for the Monaco Energy Boat Challenge for this design cycle, we realized how limiting the logistics and fabrication of that vessel would be. Because of this, the team has decided to shift gears and instead manufacture a vessel with speed as its goal. We are planning on outfitting a Liberator tunnel hull with custom battery packs composed of Murata VTC6A cells for a total output of 300kW. ",
    name: "BMBF",
    speed: "TBD",
    image: "/images/OurBoatsBMBF.png",
    performance: "TBD",
    year: "2020"
}]

const titlePhoto = "/images/OurBoats.png?v=2"
const titleText = "Our Boats"
export default function Home() {
    return (
        <>
            <TitlePhoto title={titleText} image={titlePhoto}/>
            <div className="bg-stone-100">
                <Timeline></Timeline>
            </div>
        </>
    );
}