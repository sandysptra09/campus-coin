import React from 'react'

import { Pagination } from "@heroui/react";

export default function ArticlePagination() {
    return (
        <div className="flex justify-center items-center">
            <Pagination
                total={10}
                initialPage={1}
                showControls
                size="md"
                classNames={{
                    item: "transition-transform hover:scale-105",
                    cursor: "bg-yellow-400 text-white font-medium",
                }}
            />
        </div>
    )
}
