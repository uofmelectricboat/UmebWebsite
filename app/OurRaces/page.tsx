export default function Home() {
    return (
        <>
            <div className='relative'>
                <img src="/images/OurRaces.jpg?v=2" className='w-full h-screen object-cover'></img>
                <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
            </div>
            <div className="bg-blue-950 pb-20">
                <h1 className="text-yellow-500 text-6xl font-bold text-center p-20">
                    Promoting Electric Propulsion
                </h1>
                <div className="text-center text-white text-3xl">
                    <p className="pb-10 px-20">
                        UM Electric Boat has competed in the ‘Promoting Electric Propulsion’ competition since 2021 and we plan on continuing this tradition—racing against top engineering schools across the country, and winning—for years to come.
                    </p>
                    <p className="p-10 px-20">
                        UMEB placed second in a heat of 10+ teams in 2021, demonstrating our strengths in both the manned and unmanned races. We hope to return in 2024 to perform even better.
                    </p>
                </div>
            </div>
            <div className="bg-white text-6xl font-bold text-center py-20">
                <h1>
                    I NEED THE IMAGE
                </h1>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <h1 className="bg-white text-6xl font-bold text-center"> I NEED THIS IMAGE </h1>
                </div>
                <div className="w-1/2 p-10">
                    <p className="text-center text-4xl px-20">
                        Each year, the flexible rules and talented competitors at PEP allow us to push forward and create innovative designs. In June of 2023, UMEB and our fellow competitors were tasked with completing a 5 mile race over 5 laps in a short out and back circuit.
                    </p>
                </div>
            </div>
            <div className="py-20">
                <p className="text-center text-4xl px-80">
                    PEP hosts a wide variety of schools from across the country, each with a unique and innovative design each year. Some schools include:
                </p>
                <div className="flex items-center px-80 py-10 text-4xl">
                    <div className="w-1/2 px-12">
                        <ul className="list-disc ml-4">
                            <li>Princeton University</li>
                            <li>Texas A&M</li>
                            <li> University of Kentucky </li>
                        </ul>
                    </div>
                    <div className="w-1/2 px-12">
                        <ul className="list-disc ml-4">
                            <li>University of Georgia</li>
                            <li>University of Washington</li>
                            <li> Johns Hopkins University </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-white text-6xl font-bold text-center py-20">
                    <h1>
                        I NEED THE IMAGE
                    </h1>
                </div>
            </div>
            <div className="bg-blue-950 py-20">
                <h1 className="text-6xl text-yellow-500 font-bold text-center">
                    Monaco Energy Boat Challenge
                </h1>
                <p className="text-center text-4xl text-white px-60 py-10">
                    UM Electric Boat is considering attending the Monaco Energy Boat Challenge in the near future. The event gathers more than 50 teams from universities and companies across the world. The competition seeks to further innovation in alternative propulsion fuel sources such as solar, hydrogen, wind, and more.
                </p>
            </div>
            {/*TODO: Fix this video*/}
            <div className="w-full">
                <iframe
                    title="YouTube Video"
                    className="w-full"
                    width=""
                    height=""
                    src="https://www.youtube.com/embed/$kEx7j_lCZ-k"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    )
  }