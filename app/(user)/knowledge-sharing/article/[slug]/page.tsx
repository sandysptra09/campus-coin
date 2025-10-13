'use client';

import React, { useState, useEffect, } from 'react'
import { useParams } from 'next/navigation';

import BreadcrumbNavigation from '@/components/custom/sections/knowledge-sharing/detail/breadcrumbs/detail-article-breadcrumb';
import AuthorInfoAvatar from '@/components/custom/sections/knowledge-sharing/detail/avatars/author-info-avatar';
import ArticleImage from '@/components/custom/sections/knowledge-sharing/detail/images/article-image';
import ArticleMeta from '@/components/custom/sections/knowledge-sharing/detail/metas/article-meta';
import ArticleContent from '@/components/custom/sections/knowledge-sharing/detail/contents/article-content';
import ArticleComment from '@/components/custom/sections/knowledge-sharing/detail/section/article-comment';
import PopularArticlesSidebar from '@/components/custom/sections/knowledge-sharing/detail/cards/popular-article-card';
import { getArticles } from '@/lib/getArticles';
import { Article } from '@/interfaces/article';
import { Skeleton } from '@heroui/react';

export default function DetailKnowledgeSharingPage({ }: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const { slug } = useParams() as { slug: string }
    const [article, setArticle] = useState<Article | null>(null);
    const [popularArticles, setPopularArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getArticles();

                const currentArticle = data.find((a) => a.slug === slug);

                setArticle(currentArticle || null);

                const popular = data
                    .filter((a) => a.slug !== slug)
                    .sort((a, b) => b.total_komen - a.total_komen)
                    .slice(0, 3)

                setPopularArticles(popular);
            } catch (error) {
                console.error('Failed to load article:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (loading) {
        return (
            <main className="w-full min-h-screen ">
                <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8'>
                        <div className='lg:col-span-2'>
                            <Skeleton className="h-8 w-1/3 mb-6 rounded" />
                            <Skeleton className="h-6 w-2/3 mb-8 rounded" />
                            <Skeleton className="h-[400px] w-full rounded-lg mb-6" />
                            <Skeleton className="h-4 w-full mb-2 rounded" />
                            <Skeleton className="h-4 w-full mb-2 rounded" />
                            <Skeleton className="h-4 w-full mb-2 rounded" />
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    if (!article) {
        return (
            <main className="w-full min-h-screen flex items-center justify-center">
                <p className="text-secondary text-lg font-semibold">
                    Sorry, Article not found.
                </p>
            </main>
        );
    }

    return (
        <main className='w-full min-h-screen'>
            <div className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
                <BreadcrumbNavigation
                    name_page="Knowledge Sharing"
                    title={article.nama_artikel}
                />
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8'>
                    <div className='lg:col-span-2'>
                        <AuthorInfoAvatar
                            name={article.penulis.nama}
                            date={article.tanggal_publikasi}
                            avatarUrl={article.penulis.foto}
                        />
                        <ArticleImage
                            imageUrl={article.gambar}
                            alt={article.nama_artikel}
                        />
                        <ArticleMeta category={article.kategori} readTime={article.lama_baca} />
                        <ArticleContent
                            title={article.nama_artikel}
                            content={article.konten}
                        />
                        <ArticleComment />
                    </div>
                    <div className='lg:col-span-1'>
                        <PopularArticlesSidebar
                            articles={popularArticles.map((a) => ({
                                id: a.id,
                                title: a.nama_artikel,
                                image: a.gambar,
                            }))}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
