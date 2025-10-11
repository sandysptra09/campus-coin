import React from 'react'

import { Image } from '@heroui/react'

type ArticleImageProps = {
    imageUrl: string
    alt?: string
}

export default function ArticleImage({
    imageUrl,
    alt = 'Article Image'
}: ArticleImageProps) {
    return (
        <div className="my-6">
            <Image
                src={imageUrl}
                alt={alt}
                radius="lg"
                className="w-full h-[280px] md:h-[400px] lg:h-[480px] object-cover"
            />
        </div>
    )
}
