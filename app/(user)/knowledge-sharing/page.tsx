import React from 'react'

import Hero from '@/components/custom/sections/knowledge-sharing/hero'
import TopPick from '@/components/custom/sections/knowledge-sharing/top-pick'
import AllArticle from '@/components/custom/sections/knowledge-sharing/all-article'

export default function KnowledgeSharingPage({}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return (
        <main className='w-full min-h-screen'>
            <Hero />
            <TopPick />
            <AllArticle />
        </main>
    )
}
