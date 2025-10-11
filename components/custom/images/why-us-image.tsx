import { Image } from "@heroui/react";

interface WhyUsImageProps {
    imageUrl: string;
    alt?: string;
}

export default function WhyUsImage({ imageUrl, alt = 'Why Us Image' }: WhyUsImageProps) {
    return (
        <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
            <Image
                src={imageUrl}
                alt={alt}
                width={'100%'}
                height={'100%'}
                className="object-cover"
            />
        </div>
    );
}