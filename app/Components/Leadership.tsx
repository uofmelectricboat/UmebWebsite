import Image from "next/image";

interface LeadershipProps {
    title: string;
    name: string;
    bio: string;
    image: string;
    info: string;
}


const LeaderShip: React.FC<LeadershipProps> = ({ title, name, bio, image, info }) => {return (
    <div className="flex justify-center items-center p-5">
        <div className="flex justify-center items-center">
            <div className="w-1/3">
                <img src={image} className="rounded-full h-3/4 w-3/4"></img>
            </div>
            <div className="w-1/3">
                <h2 className="font-bold text-4xl">{title}</h2>
                <div className="flex ">
                    <h3 className="font-bold text-xl pr-2">{name}</h3>
                    <Image src="/icons/LinkedIn.png" width={30} height={20} alt="image"></Image>
                </div>
                <h4 className="italic text-lg">{info}</h4>
                <p>
                    {bio}
                </p>
            </div>
        </div>
    </div>
    );
}

export default LeaderShip;