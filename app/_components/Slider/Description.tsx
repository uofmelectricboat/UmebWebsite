import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

type Props = {
    clickNext: any;
    clickPrev: any;
    activeIdx: number;
}
const Description = ({clickNext, clickPrev, activeIdx}: Props) => {
    const desc = [{
        id: 1,
        title: "Mechanical",
        desc: "The UMEB Mechanical Team is responsible for the component-level design, manufacturing, testing, and validation of all structural, drivetrain, mechatronics, and safety systems on the boat. Additionally, the Mechanical Team works closely with the Electrical Team to make system-level decisions on the design of the boat and assures all systems on the boat operate cohesively."
    },{
        id: 2,
        title: "Electrical",
        desc: "The UMEB Electrical Team is responsible for the design, integration, testing, and validation of all powertrain, controls, and software systems on the boat. Like the Mechanical team, the Electrical Team works closely with the Mechanical Team to ensure the overall success and safety of the boat, driver, and surroundings."
    },{
        id: 3,
        title: "Operations",
        desc: "The UMEB Operations Team is responsible for managing the logistical demands of the Michigan Electric Boat Team, including the maintenance of the Wilson Center workspace, team organization, and event logistics. Additionally, the Operations Team handles the standard operating procedures and safety procedures to promote an efficient working environment."
    },{
        id: 4,
        title: "Business",
        desc: "The UMEB Business Team is responsible for supporting our engineers in all tasks ranging from sponsor relations to marketing. We strive to aid our engineers from lacking any resources that would limit their innovation. Each year, we raise tens of thousands of dollars in order to build the fastest boat possible."
    }]
    return(
        <div className={"grid place-items-start w-full bg-stone-200 relative rounded-tr-3xl rounded-br-3xl"}>
            {desc.map((elem, idx) => (
                <div key={idx} className={activeIdx === idx ? `block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out` : "hidden"}>
                    <div className={"py-16 px-5 text-5xl font-extrabold text-black"}>
                        {elem.title}
                    </div>
                    <div className={"leading-relaxed pl-5 pr-10 font-medium text-base tracking-wide h-40 italic text-gray-600"}>
                        {elem.desc}
                    </div>
                    <div className={"absolute bottom-1 w-full flex justify-center items-center"}>
                        <div onClick={clickPrev} className={"absolute bottom-2 right-10 cursor-pointer"}>
                            <FaChevronCircleLeft size={30} color={"gray"}/>
                        </div>
                        <div onClick={clickNext} className={"absolute bottom-2 right-2 cursor-pointer"}>
                            <FaChevronCircleRight size={30} color={"gray"}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Description;