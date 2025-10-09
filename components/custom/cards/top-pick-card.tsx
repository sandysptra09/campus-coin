import React from 'react'

import TopPickChip from '@/components/custom/chips/top-pick-chip'
import ArticleIcon from '@/public/assets/icons/article-icon'
import { Image } from '@heroui/react'

export default function TopPickCard() {
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-8 border-b border-[#B7B7B7]">
            <div className="flex flex-col gap-3 flex-1">
                <TopPickChip variant="secondary" icon={<ArticleIcon />}>
                    Article
                </TopPickChip>

                <h3 className="text-md text-secondary md:text-[25px] font-bold tracking-wide">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h3>

                <p className="text-sm md:text-base text-secondary/80 leading-relaxed max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                    faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                    pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                    tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-[300px] lg:w-[350px]">
                <Image
                    src="https://placehold.jp/450x300.png"
                    alt="Top pick article"
                    radius="lg"
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    )
}
