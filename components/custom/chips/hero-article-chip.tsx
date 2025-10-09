import React from 'react'

import { Chip } from '@heroui/react'

interface HeroArticleChipProps {
    children: React.ReactNode
}

export default function HeroArticleChip({ children }: HeroArticleChipProps) {
    return (
        <Chip
            size="md"
            variant="solid"
            radius="full"
            classNames={{
                base: "bg-primary text-white font-medium text-base shadow-md hover:shadow-lg transition-all duration-200 px-5 py-2",
            }}
        >
            {children}
        </Chip>
    )
}
