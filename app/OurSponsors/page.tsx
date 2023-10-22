export default function Home() {
    return (
        <>
            <div className="relative">
                <img src="/images/OurSponsors.png" className="w-full h-screen object-cover" alt="Sponsors" />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-800 opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-6xl font-bold">Our Sponsors</h1>
                    <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg">Sponsor Us</button>
                {/*    TODO: Make this button the button that makes more sense*/}
                </div>
            </div>
            <div className="p-14">
                <h1 className="text-6xl text-center font-bold">
                    Thank you to our Sponsors!
                </h1>
            </div>
        </>
    )
  }