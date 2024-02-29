'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    return (
        <Image 
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height="45"
        width="70"
        src="/images/logo-transp.png"
        />
    );
};

export default Logo;