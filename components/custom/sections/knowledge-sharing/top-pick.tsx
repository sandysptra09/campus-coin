'use client';

import React from 'react'

import TopPickChip from '../../chips/top-pick-chip';
import ArticleIcon from '@/public/assets/icons/article-icon';
import TopPickCard from '../../cards/top-pick-card';

export default function TopPick() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
            <div className='fle flex-col gap-12'>
                <div className='flex flex-col items-start gap-4'>
                    <TopPickChip variant='primary' icon={<ArticleIcon />}>Article</TopPickChip>
                    <h2 className="text-xl md:text-[45px] text-secondary font-bold mt-2 leading-snug">
                        Top Picks from the Community
                    </h2>
                    <div className="w-full h-[2px] bg-[#B7B7B7] mt-2" />
                </div>
                <div className='flex flex-col gap-10'>
                    {[...Array(3)].map((_, i) => (
                        <TopPickCard key={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
