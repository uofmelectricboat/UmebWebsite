import SponsorCard from "@/app/Components/SponsorCard";

const sponsors = [{
    text: "The Michigan College of Engineering strives to anticipate the changes ahead and provide scientific and technological leadership - for the common good. Michigan Engineering is home to top-ranked departments that collaborate within the nation's number one public research institution - The University of Michigan.",
    name: "MICHIGAN COLLEGE OF ENGINEERING",
    zone: "SUNLIGHT ZONE",
    image: "/logos/UmichCOE.png",
    learnMore: "31 hp",
},{
    text: "The Michigan NAME Department trains naval architects and marine engineers who lead, setting the global standard for design and research in every endeavor that touches water.",
    name: "MICHIGAN NAVAL ARCHITECTURE & MARINE ENGINEERING",
    zone: "SUNLIGHT ZONE",
    image: "/logos/MichNavalSponsor.png",
    learnMore: "31 hp",
},{
    text: "Cadence is a pivotal leader in electronic design, building upon more than 30 years of computational software expertise. The company applies its underlying Intelligent System Design strategy to deliver software, hardware and IP that turn design concepts into reality. Cadence customers are the world's most innovative companies, delivering extraordinary electronic products from chips to boards to systems for the most dynamic market applications including consumer, hyperscale computing, 5G communications, automotive, aerospace, industrial and healthcare.",
    name: "CADENCE DESIGN SYSTEMS",
    zone: "SUNLIGHT ZONE",
    image: "/logos/cadence.png",
    learnMore: "31 hp",
}, {
    text: "Ford Motor Company is an automobile company that designs, manufactures, markets, and services a full line of Ford trucks, utility vehicles, cars as well as Lincoln luxury vehicles.",
    name: "FORD MOTOR COMPANY",
    zone: "SUNLIGHT ZONE",
    image: "/logos/Ford.png",
    learnMore: "31 hp",
},{
    text: "With more than 35 years of precision machining experience, PALM Industries LLC. offers in-house design support, prototype, production and assembly of custom parts and systems. At PALM Industries, LLC. They specialize in highly processed parts requiring multiple machining and processing operations which involve exotic to conventional materials, and numerous outside services.",
    name: "PALM INDUSTRIES",
    zone: "SUNLIGHT ZONE",
    image: "/logos/Palm.png",
    learnMore: "31 hp",
},{
    text: "Siemens Teamcenter, NX, and Simcenter provide industry-leading project management, design, and simulation capabilities.",
    name: "SIEMENS",
    zone: "SUNLIGHT ZONE",
    image: "/logos/Siemens.png",
    learnMore: "31 hp",
},{
    text: "Brunswick is defining, creating, and innovating the future of recreational boating. With advanced design, technology and innovation, they will redefine recreational boating and advance their leadership position in the marine industry.",
    name: "BRUNSWICK",
    zone: "SUNLIGHT ZONE",
    image: "/logos/Brunswick.png",
    learnMore: "31 hp",
},{
    text: "Ilmor is a manufacturer of high-performance racing and recreational marine engines, with a drive for pushing the boundaries of innovative engineering in everything they do.",
    name: "ILMOR ENGINEERING",
    zone: "SUNLIGHT ZONE",
    image: "/logos/Ilmor.png",
    learnMore: "31 hp",
},{
    text: "A progressive, family-owned company located in Decatur, Indiana, Thunderbird Products produces the world-renowned lines of Formula Boats. With a long-established philosophy of uncompromising quality in every detail, Formula is recognized as the world's premier powerboat manufacturer.",
    name: "FORMULA BOATS",
    zone: "SUNLIGHT ZONE",
    image: "/logos/Formula.png",
    learnMore: "31 hp",
},{
    text: "Pure Watercraft is enabling a new era in boating that is more enjoyable, accessible, and environmentally-friendly than ever before. Founded in 2011 in Seattle, Washington, the company delivers an innovative electric marine propulsion system that preserves the air and waterways for future generations. In addition, Pure Watercraft and General Motors are collaborating on a shared vision to promote sustainability through an expansion of zero-emissions mobility and reflects the holistic approach necessary for widespread EV adoption.",
    name: "PURE WATERCRAFT",
    zone: "SUNLIGHT ZONE",
    image: "/logos/PureWatercraft.png",
    learnMore: "31 hp",
},{
    text: "RedViking is a provider of manufacturing and test solutions for the automotive, aerospace, heavy equipment, and defense industries. RedViking is Your Proven Partner for Manufacturing Solutions, Dynamic Test Systems, Operational Intelligence, and Assembly Solutions.",
    name: "RED VIKING",
    zone: "SUNLIGHT ZONE",
    image: "/logos/RedViking.png",
    learnMore: "31 hp",
}]

export default function Home() {
    return (
        <>
            <div className="relative">
                <img src="/images/OurSponsors.png" className="w-full h-screen object-cover" alt="Sponsors" />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-800 opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-6xl font-bold">Our Sponsors</h1>
                    <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">Sponsor Us</button>
                {/*    TODO: Make this button the button that makes more sense*/}
                </div>
            </div>
            <div className="p-14">
                <h1 className="text-6xl text-center font-bold">
                    Thank you to our Sponsors!
                </h1>
            </div>
            <div>
                {sponsors.map((sponsor: { text: any; name: any; zone: any; image: any; learnMore: any; }, index: any) => (
                    <SponsorCard
                        key={index}
                        text={sponsor.text}
                        name={sponsor.name}
                        learnMore={sponsor.learnMore}
                        image={sponsor.image}
                        zone={sponsor.zone}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
  }