import TitlePhoto from "@/app/Components/TitlePhoto";

const titlePhoto = "/images/Media.png?v=2"
const titleText = "Our Media"
export default function Home() {
    return (
        <>
            <TitlePhoto title={titleText} image={titlePhoto}/>
        </>
    )
}