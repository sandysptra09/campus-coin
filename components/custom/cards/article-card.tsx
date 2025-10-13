'use client';

import React, { useState, useEffect } from 'react'

import { Card, CardBody, Image, Skeleton } from '@heroui/react'
import ReadFullArticleButton from '../buttons/read-full-article-button'
import ArticlePagination from '../paginations/article-pagination'
import { getArticles } from '@/lib/getArticles';
import { Article } from '@/interfaces/article';

export default function ArticleCard({ category = 'all' }: { category?: string }) {
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true)
            const data = await getArticles()
            setArticles(category === 'all' ? data : data.filter(a => a.kategori === category))
            setLoading(false)
        }
        fetchArticles()
    }, [category])

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                {loading
                    ? Array.from({ length: 9 }).map((_, i) => (
                        <Card
                            key={i}
                            shadow="none"
                            radius="lg"
                            className="border-none flex flex-col h-full"
                        >
                            <Skeleton className="w-full h-[200px] rounded-lg" />
                            <CardBody className="p-4 flex flex-col flex-grow justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <Skeleton className="h-4 w-24 rounded" />
                                        <Skeleton className="h-3 w-16 rounded" />
                                    </div>
                                    <Skeleton className="h-5 w-3/4 mb-2 rounded" />
                                    <Skeleton className="h-4 w-full mb-1 rounded" />
                                    <Skeleton className="h-4 w-5/6 mb-4 rounded" />
                                </div>
                                <Skeleton className="h-10 w-32 rounded-lg" />
                            </CardBody>
                        </Card>
                    ))
                    : articles.map((article) => (
                        <Card
                            key={article.id}
                            shadow="none"
                            radius="lg"
                            className="border-none flex flex-col h-full"
                        >
                            <Image
                                src={article.gambar}
                                alt={article.nama_artikel}
                                radius="lg"
                                width="100%"
                                className="w-full h-[200px] object-cover"
                            />
                            <CardBody className="p-4 flex flex-col flex-grow justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="uppercase text-secondary text-sm md:text-base font-semibold tracking-wide">
                                            {article.kategori}
                                        </span>
                                        <span className="text-secondary text-xs md:text-sm opacity-70">
                                            {article.lama_baca}
                                        </span>
                                    </div>
                                    <h3 className="text-secondary font-semibold text-base md:text-[20px] mb-2">
                                        {article.nama_artikel}
                                    </h3>
                                    <p className="text-sm md:text-base text-secondary/80 leading-relaxed mb-4 line-clamp-3">
                                        {article.deskripsi_singkat}
                                    </p>
                                </div>

                                <ReadFullArticleButton
                                    href={`/article/${article.id}`}
                                    size="md"
                                >
                                    Read Full Article
                                </ReadFullArticleButton>
                            </CardBody>
                        </Card>
                    ))}
            </div>
            <div className='mt-8'>
                <ArticlePagination />
            </div>
        </div>
    )
}
