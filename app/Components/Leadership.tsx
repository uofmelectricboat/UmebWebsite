interface LeadershipProps {
    title: string;
    name: string;
    bio: string;
    image: string;
    info: string;
}


const LeaderShip: React.FC<LeadershipProps> = ({ title, name, bio, image, info }) => {return (
    <div className="flex justify-center items-center p-2">
        <div className="flex justify-center items-center">
            <div className="w-1/4">
                <img src={image} className="rounded-full h-3/4 w-3/4"></img>
            </div>
            <div className="w-1/4">
                <h2 className="font-bold text-4xl">{title}</h2>
                <h3 className="font-bold text-xl">{name}</h3>
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