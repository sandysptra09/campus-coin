import { Image } from "@heroui/react"

export default function EducationBanner() {
    return (
        <Image
            src='/assets/images/education-banner.png'
            alt='Education-Powered. Future-Focused. Community-Led Banner'
            height={400}
            radius='lg'
            className='w-full object-cover'
        />
    )
}
