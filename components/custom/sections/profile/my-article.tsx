'use client';

import React from 'react'

import { Card } from '@heroui/react';
import MyArticleCard from '../../cards/my-article-card';

export default function MyArticle() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-2 mt-8'>
            <Card shadow='sm' radius='lg' className='p-6 md:p-8'>
                <h3 className='text-base md:text-[25px] font-semibold text-secondary mb-6'>
                    My Article
                </h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <MyArticleCard
                        title='How to Build Better Habits'
                        image='https://placehold.jp/100x100.png'
                        views={61}
                        likes={49}
                        comments={20}
                    />
                    <MyArticleCard
                        title='The Art of Focus and Productivity'
                        image='https://placehold.jp/100x100.png'
                        views={74}
                        likes={58}
                        comments={30}
                    />
                    <MyArticleCard
                        title='Exploring Mindfulness in Daily Life'
                        image='https://placehold.jp/100x100.png'
                        views={89}
                        likes={64}
                        comments={40}
                    />
                </div>
            </Card>
        </section>
    )
}
