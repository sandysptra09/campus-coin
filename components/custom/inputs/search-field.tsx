import React from 'react'

import { Input } from '@heroui/react'
import { SearchIcon } from '@/public/assets/icons/search-icon'

export default function SearchField(props: { placeholder?: string }) {
    return (
        <div className="w-full md:w-[300px] lg:w-[450px]">
            <Input
                type='search'
                isClearable
                placeholder={props.placeholder ?? "Search Event..."}
                radius="full"
                size='lg'
                variant="flat"
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
