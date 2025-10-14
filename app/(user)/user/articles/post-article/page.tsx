'use client';

import React from 'react'

import PostArticle from '@/components/custom/sections/post-article/post-article'

export default function PostArticlePage({ }: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return (
        <main className='w-full min-h-screen'>
            <PostArticle />
        </main>
    )
}
