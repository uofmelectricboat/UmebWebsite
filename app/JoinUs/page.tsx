
const titlePhoto = "/images/JoinUs.png"
export default function Home() {
    return (
        <>
            <div className='relative'>
                <img src={titlePhoto} className='w-full h-screen object-cover'></img>
                <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-6xl font-bold">Our Media</h1>
                </div>
            </div>
        </>
    )
  }