'use client';

import React, { useState, useEffect } from 'react'

import TopPickChip from '../../chips/top-pick-chip';
import ArticleIcon from '@/public/assets/icons/article-icon';
import TopPickCard from '../../cards/top-pick-card';
import { getArticles } from '@/lib/getArticles';
import { Article } from '@/interfaces/article';
import { Skeleton } from '@heroui/react';

export default function TopPick() {
    const [topPicks, setTopPicks] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTopPicks = async () => {
            setLoading(true);
            const data = await getArticles();

            const sorted = data
                .sort((a, b) => b.total_komen - a.total_komen)
                .slice(0, 3);

            setTopPicks(sorted);
            setLoading(false);
        };

        fetchTopPicks();
    }, []);

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
                    {loading
                        ? Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-6 mt-6">
                                <div className="flex-1 flex flex-col gap-3">
                                    <Skeleton className="h-5 w-32 rounded" />
                                    <Skeleton className="h-6 w-3/4 rounded" />
                                    <Skeleton className="h-4 w-full rounded" />
                                    <Skeleton className="h-4 w-5/6 rounded" />
                                    <Skeleton className="h-10 w-32 mt-2 rounded-lg" />
                                </div>
                                <Skeleton className="w-full md:w-[300px] h-[180px] rounded-lg" />
                            </div>
                        ))
                        : topPicks.map((article) => (
                            <TopPickCard key={article.id} article={article} />
                        ))}
                </div>
            </div>
        </section>
    )
}
