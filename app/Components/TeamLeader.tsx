import Button from "../Components/buttons"

interface LeadershipProps {
    title: string;
    name: string;
    info: string;
    image: string;
    team: string;
}


const TeamLeader: React.FC<LeadershipProps> = ({ title, name, team, image, info }) => {return (
    <div className="w-1/5 flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <img src={image} className="rounded-full h-3/4 w-3/4"></img>
          </div>
          
          <div>
            <h2 className="font-bold text-xl">{title}</h2>
            <h3 className="font-bold text-lg">{name}</h3>
            <h4 className="italic"> {info} </h4>
          </div>
          {/* <div className="py-5">
            <Button buttonText={team} ></Button>
          </div> */}
        </div>
    );
}

export default TeamLeader;