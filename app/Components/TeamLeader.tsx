import Image from "next/image";
import Link from "next/link";

interface LeadershipProps {
    title: string;
    name: string;
    info: string;
    image: string;
    team: string;
}


const TeamLeader: React.FC<LeadershipProps> = ({ title, name, team, image, info }) => {return (
    <div className="container items-center justify-center py-10">
        <div className="flex items-center justify-center">
            <Image src={image} alt={"Image"} width={300} height={300}></Image>
        </div>
        <div className="text-center">
            <h2 className="font-bold text-xl">{title}</h2>
            <div className="flex justify-center">
                <h3 className="font-bold text-lg pr-2">{name}</h3>
                <Link href={""}>
                    <Image src="/Icons/LinkedIn.png" alt="LinkedIn" width={30} height={20}></Image>
                </Link>
            </div>
            <h4 className="italic"> {info} </h4>
        </div>
    </div>
    );
}

export default TeamLeader;