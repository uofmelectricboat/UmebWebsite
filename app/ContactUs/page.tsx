import TitlePhoto from "@/app/Components/TitlePhoto";
import EmailForm from "@/app/Components/EmailForm";

const titlePhoto = "/TitlePhotos/ContactUs.png"
const titleText = "Contact Us"

export default function Home() {
    return (
        <>
            <TitlePhoto title={titleText} image={titlePhoto}/>
            <div className="flex items-center justify-center">
                <div className="w-full py-10 text-center">
                    <div className="mb-4 flex flex-col sm:flex-row items-center justify-center">
                        <h2 className="font-bold text-2xl mr-2">
                            Address:
                        </h2>
                        <h3 className="text-2xl">
                            2603 Draper Drive, Ann Arbor, MI 48109
                        </h3>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center">
                        <h2 className="font-bold text-2xl mr-2">
                            Email:
                        </h2>
                        <h3 className="text-2xl">
                            electricboat@umich.edu
                        </h3>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-2xl px-2 pb-10">
                <EmailForm></EmailForm>
            </div>
        </>
    )
}