import Image from "next/image";
import Link from "next/link";

type LogoProps = {
    size?: number
}

export default function CampusCoinLogo({ size = 40

}: LogoProps) {
    return (
        <Link href="/" className="flex items-center gap-2">
            <Image
                src='/assets/logo/campus-coin-logo.png'
                alt="Campus Coin Logo"
                width={size}
                height={size}
                priority />
        </Link>
    )
}