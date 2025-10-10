'use client';

import React from 'react'

import BreadcrumbNavigation from '@/components/custom/sections/knowledge-sharing/detail/breadcrumbs/detail-article-breadcrumb';
import AuthorInfoAvatar from '@/components/custom/sections/knowledge-sharing/detail/avatars/author-info-avatar';
import ArticleImage from '@/components/custom/sections/knowledge-sharing/detail/images/article-image';
import ArticleMeta from '@/components/custom/sections/knowledge-sharing/detail/metas/article-meta';
import ArticleContent from '@/components/custom/sections/knowledge-sharing/detail/contents/article-content';
import PopularArticlesSidebar from '@/components/custom/sections/knowledge-sharing/detail/cards/popular-article-card';

export default function DetailKnowledgeSharingPage({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return (
        <main className='w-full min-h-screen'>
            <div className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
                <BreadcrumbNavigation
                    name_page="Knowledge Sharing"
                    title="Title of Article"
                />
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8'>
                    <div className='lg:col-span-2'>
                        <AuthorInfoAvatar
                            name="John Doe"
                            date="November 24, 2025"
                            avatarUrl="https://i.pravatar.cc/100?img=3"
                        />
                        <ArticleImage
                            imageUrl="https://placehold.jp/400x280.png"
                            alt="Sample Article"
                        />
                        <ArticleMeta category="Sustainability" readTime="5 min Read" />
                        <ArticleContent
                            title="Nisi sodales consequat magna ante condimentum neque at"
                            content={`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Aenean pulvinar dolor non risus efficitur, et viverra erat fermentum. 
                                Praesent vel semper mauris. Sed euismod, massa vel tincidunt fermentum, 
                                sem arcu cursus urna, sit amet aliquet mi justo a purus.</p>
                                <p style='margin-top: 10px;'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                                posuere cubilia curae; Curabitur tempus, lorem in varius lacinia, erat 
                                urna consectetur nunc, nec eleifend velit risus non orci.</p>`}
                        />
                    </div>
                    <div className='lg:col-span-1'>
                        <PopularArticlesSidebar
                            articles={[
                                { id: 1, title: "Title of Article...", image: "https://placehold.jp/300x200.png" },
                                { id: 2, title: "Title of Article...", image: "https://placehold.jp/300x200.png" },
                                { id: 3, title: "Title of Article...", image: "https://placehold.jp/300x200.png" },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
