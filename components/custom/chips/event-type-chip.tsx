import React from 'react'

import { Chip } from '@heroui/react'

interface EventTypeChipProps {
    children: React.ReactNode
}

export default function EventTypeChip({ children }: EventTypeChipProps) {
    return (
        <Chip
            size="sm"
            variant="solid"
            radius="full"
            className='mt-1 md:mt-2 capitalize'
            classNames={{
                base: "bg-secondary text-white text-sm px-3 py-1",
            }}
        >
            {children}
        </Chip>
    )
}
