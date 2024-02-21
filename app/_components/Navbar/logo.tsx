'use client';

import Link from 'next/link'
import Image from 'next/image';
import {useRouter} from "next/navigation"

const Logo = () => {
    const router = useRouter();

    return (
        <Link href="/">
                <Image alt="Logo" className="top-0 left-0 cursor-pointer" height="300" width="300" src="/Icons/logo.png"/>
        </Link>
        
    )
}

export default Logo;