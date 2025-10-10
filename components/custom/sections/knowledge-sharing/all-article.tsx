'use client';

import React from 'react'

import AllArticleTab from '../../tabs/all-article-tab';

export default function AllArticle() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
            <div className='mb-10'>
                <AllArticleTab />
            </div>
        </section>
    )
}
