import React, { useState } from 'react';
import { CaretDown, CaretRight, Horse } from "phosphor-react";
import Link from 'next/link'


const UpTriangle = () => {
    const borderStyle = '1px solid rgb (209, 213, 219)';
    return <div style={{
        position: 'absolute',
        top: '-4px',
        left: '15px',
        width: '10px',
        height: '10px',
        transform: 'rotate(45deg)',
        backgroundColor: 'white',
        borderLeft: borderStyle,
        borderTop: borderStyle,
    }}>
    </div >
}

interface DropDownProps {
    title: string;
    options: { name: string; url: string; }[];
}

const DropDown: React.FC<DropDownProps> = ({ title, options }) => {
    return (
        <div>
            <div className="group relative cursor-pointer py-2">
                <div className="inline-block px-4 py-2 font-semibold leading-none text-white transition bg-blue-500 border-2 border-transparent rounded-full hover:border-blue-300 hover:bg-blue-400">
                    <div className="flex">
                        <a> {title} </a>
                        <CaretRight size={16}></CaretRight>
                    </div>
                </div>
                <div className="invisible absolute bg-white rounded boarder py-2 w-40 mt-2 group-hover:visible" >
                    <UpTriangle></UpTriangle>
                    <ul>
                    {options.map(option => (
                        <li
                            className="hover:bg-blue-500 text-black hover:text-white px-2 py-1 cursor-pointe"
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