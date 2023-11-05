import TitlePhoto from "@/app/Components/TitlePhoto";

const titlePhoto = "/images/JoinUs.png"
const titleText = "Our Media"
export default function Home() {
    return (
        <>
            <TitlePhoto image={titlePhoto} title={titleText}/>
        </>
    )
  }