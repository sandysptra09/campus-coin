import React from 'react'

import { Chip } from '@heroui/react'

type ProfileBadgeProps = {
    level: 'Bronze' | 'Silver' | 'Gold'
}

export default function ProfileBadge({ level }: ProfileBadgeProps) {
    const colorMap: Record<string, string> = {
        Bronze: 'bg-[#cd7f32]',
        Silver: 'bg-gray-400',
        Gold: 'bg-primary',
    }

    return (
        <Chip
            size="lg"
            variant="flat"
            radius='sm'
            className={`${colorMap[level]} text-white font-medium`}
        >
            {level}
        </Chip>
    )
}
