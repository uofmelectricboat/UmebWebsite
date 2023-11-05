import Button from "../Components/buttons"

interface TitlePhotoProps {
    title: string;
    buttonText: string;
    buttonLink: string;
    image: string;
}


const TitlePhoto: React.FC<TitlePhotoProps> = ({ title, buttonText, image, buttonLink }) => {

    return (
        <div className='relative'>
            <img src={image} className='w-full h-screen object-cover'></img>
            <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="text-white text-6xl font-bold">{title}</h1>
            </div>
        </div>
    );
}

export default TitlePhoto;