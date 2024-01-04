import Logo from "@/app/Components/Navbar/logo";
import Navbar from "@/app/Components/Navbar/navbar";

const Header = () => {
    return (
        <header className={"absolute z-[20] mx-auto w-full items-center flex justify-between text-white px-10"}>
            <Logo/>
            <Navbar></Navbar>
        </header>
    );
}

export default Header;