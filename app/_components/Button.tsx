import React from "react";

interface ButtonProps {
    text: string;
    href: string;
    width: number;
}


const Button: React.FC<ButtonProps> = ({ text, href, width }) => {

    return(
        <a href={href} className={"cursor-pointer hover:text-white text-blue-900"}>
            <div className={"h-12 w-" + String(width) + " rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 p-1 hover:scale-105 duration-300"}>
                <div className="flex h-full w-full items-center rounded-lg justify-center bg-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-600 hover:to-pink-500">
                    <h1 className="text-xl">
                        {text}
                    </h1>
                </div>
            </div>
        </a>
    );
}

export default Button;