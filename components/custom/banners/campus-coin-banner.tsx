import Image from "next/image";

interface BannerProps {
    size?: number;
}

export default function CampusCoinBanner({ size = 200 }: BannerProps) {
    return (
        <Image
            src="/assets/images/campus-coin-banner.png"
            alt="Campus Coin Banner"
            width={size}
            height={size}
            priority
            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
    )
}