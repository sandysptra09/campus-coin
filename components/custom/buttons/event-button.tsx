import React from 'react'

import { Button } from '@heroui/react'

export default function EventButton({ status = 'coming-soon' }) {
    const isOpen = status === 'open'

    return (
        <Button
            radius="lg"
            color={isOpen ? 'secondary' : 'default'}
            disabled={!isOpen}
            className={`w-full font-medium ${isOpen
                ? 'text-white'
                : 'bg-gray-200 text-secondary cursor-not-allowed'
                }`}
        >
            {isOpen ? 'Open Registration' : 'Coming Soon'}
        </Button>
    )
}
