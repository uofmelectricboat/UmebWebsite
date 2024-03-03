"use client";

import Link from 'next/link'
import { FaCaretDown } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
interface DropDownProps {
    title: string;
    options: { name: string; url: string; }[];
}

const DropDown: React.FC<DropDownProps> = ({ title, options }) => {
    return (
        <div>
            <div className="group relative cursor-pointer">
                <div className="text-xl font-bold">
                    <div className="flex">
                        <p> {title} </p>
                    </div>
                </div>
                <div className="invisible absolute bg-white w-36 mt-2 boarder py-2 ease-out duration-100 group-hover:visible" >
                    <ul>
                    {options.map(option => (
                        <li
                            className="hover:bg-blue-500 text-black hover:text-white px-2 py-1 cursor-pointer text-base"
                            key={option["url"]}
                        >
                            <Link href={option["url"]}>
                            {option["name"]}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DropDown;