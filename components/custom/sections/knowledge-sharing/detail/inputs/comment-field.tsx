import React from 'react'

import { Input } from '@heroui/react'

type CommentInputProps = {
    placeholder?: string
}

export default function CommentField({
    placeholder = 'Share your thoughts...',
}: CommentInputProps) {
    return (
        <Input
            type="text"
            placeholder={placeholder}
            radius="sm"
            size="md"
            variant="bordered"
            classNames={{
                label: "text-sm font-medium text-[gray-700] mb-1",
                inputWrapper: "border-gray-300 hover:border-gray-400 focus-within:border-[#F2D443]"
            }}
        />
    )
}
