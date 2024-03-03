import Image from "next/image";

interface LeadershipProps {
    title: string;
    name: string;
    bio: string;
    image: string;
    info: string;
    LinkedIn: string;
}


const LeaderShip: React.FC<LeadershipProps> = ({ title, name, bio, image, info, LinkedIn }) => {
    return (
        <div className="md:flex w-auto items-center justify-center py-10">
            <div className="px-10 flex justify-center">
                <Image src={image} alt={"Image"} width={300} height={300} className={"rounded"}></Image>
            </div>
            <div className="basis-1/2 md:text-left text-center">
                <h2 className="font-bold text-2xl lg:text-4xl">
                    {title}
                </h2>
                <div className="flex justify-center md:justify-start">
                    <h3 className="font-bold text-xl pr-2">
                        {name}
                    </h3>
                    <a href={LinkedIn}>
                        <Image src="/Icons/LinkedIn.png" width={30} height={20} alt="image"></Image>
                    </a>
                </div>
                <h4 className="italic text-lg">
                    {info}
                </h4>
                <p className={"md:block hidden"}>
                    {bio}
                </p>
            </div>
        </div>
    );
}

export default LeaderShip;