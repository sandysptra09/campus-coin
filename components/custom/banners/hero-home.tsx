import { Image } from "@heroui/react";

export default function HeroHome() {
    return (
        <Image
            src='/assets/images/hero-home.png'
            alt='Hero Home Banner'
            height={'100%'}
            width={'100%'}
            radius='lg'
            className='w-full object-cover'
        />
    )
}