import React from 'react'

import TopPickChip from '@/components/custom/chips/top-pick-chip'
import ArticleIcon from '@/public/assets/icons/article-icon'
import { Image } from '@heroui/react'
import { Article } from '@/interfaces/article'
import Link from 'next/link'

interface TopPickCardProps {
    article: Article
}

export default function TopPickCard({ article }: TopPickCardProps) {
    const { slug, nama_artikel, deskripsi_singkat, gambar, kategori } = article

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-8 border-b border-[#B7B7B7]">
            <div className="flex flex-col gap-3 flex-1">
                <TopPickChip variant="secondary" icon={<ArticleIcon />}>
                    {kategori || 'Article'}
                </TopPickChip>

                <Link href={`/knowledge-sharing/article/${slug}`}>
                    <h3 className="text-md text-secondary md:text-[25px] font-bold tracking-wide">
                        {nama_artikel}
                    </h3>
                </Link>

                <p className="text-sm md:text-base text-secondary/80 leading-relaxed max-w-lg">
                    {deskripsi_singkat}
                </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-[300px] lg:w-[350px]">
                <Image
                    src={gambar}
                    alt={nama_artikel}
                    width={'100%'}
                    height={200}
                    radius="lg"
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    )
}
