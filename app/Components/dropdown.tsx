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
    options: [];
}

const DropDown: React.FC<DropDownProps> = ({ title, options }) => {
    return (
        <div>
            <div className="group relative cursor-pointer py-2">
                <div className="rounded text-white border-gray-300 px-2 py-1 hover:bg-gray-400 bg-gray-500 flex items-center">
                    <a> {title} </a>
                    <CaretRight size={16}></CaretRight>
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