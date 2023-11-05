import TitlePhoto from "@/app/Components/TitlePhoto";

const titleText = ""
const titlePhoto = "/images/Home.jpg?v=3"

export default function Home() {
    return (
    <>
        <TitlePhoto title={titleText} image={titlePhoto}/>
    </>
    )
}
