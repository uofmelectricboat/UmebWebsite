'use client';

import Link from 'next/link'
import Image from 'next/image';
import {useRouter} from "next/navigation"

const Logo = () => {
    const router = useRouter();

    return (
        <Link href="/">
                <Image alt="Logo" className="hidden top-0 left-0 md:block cursor-pointer" height="300" width="300" src="/images/logo.png?v=2"/>
        </Link>
        
    )
}

export default Logo;