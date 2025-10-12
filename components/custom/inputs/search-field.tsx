import React from 'react'

import { Input } from '@heroui/react'
import { SearchIcon } from '@/public/assets/icons/search-icon'

interface SearchFieldProps {
    value: string
    onChange: (value: string) => void
}

export default function SearchField({ value, onChange }: SearchFieldProps) {
    return (
        <div className="w-full md:w-[300px] lg:w-[450px]">
            <Input
                type='search'
                isClearable
                placeholder="Search Event..."
                radius="full"
                size='lg'
                variant="flat"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                startContent={
                    <SearchIcon className="text-gray-500 mb-0.5 pointer-events-none shrink-0" />
                }
                classNames={{
                    input: [
                        "text-gray-900",
                        "text-[14px]",
                    ],
                }}

            />
        </div>
    )
}
