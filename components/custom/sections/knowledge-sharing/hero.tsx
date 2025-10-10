'use client';

import React from 'react'

import HeroArticleChip from '../../chips/hero-article-chip';

export default function Hero() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
            <div className="flex flex-col text-center items-center justify-center gap-2">
                <h1 className="text-xl md:text-[45px] text-secondary font-bold mt-2 leading-snug max-w-xl">
                    Share Your Knowledge,
                    Earn Your Rewards.
                </h1>
                <p className="text-secondary text-base mt-6 leading-[25px] max-w-xl">
                    CampusCoin provides a space for students to share ideas, experiences,
                    and inspiration. Every article, opinion, or insight you share not
                    only benefits the community, but also rewards you with coins as a
                    token of appreciation.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <HeroArticleChip>Articles</HeroArticleChip>
                    <HeroArticleChip>Opinions</HeroArticleChip>
                    <HeroArticleChip>Knowledge</HeroArticleChip>
                    <HeroArticleChip>Ideas</HeroArticleChip>
                </div>
            </div>
        </section>
    )
}
