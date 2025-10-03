import { Image } from "@heroui/react"

export default function HeroChallengeBanner() {
    return (
        <Image
            src='/assets/images/hero-challenge-banner.png'
            alt='Hero Challenge Banner'
            height={350}
            width={600}
            radius='lg'
            className='w-full object-cover'
        />
    )
}

