import React from 'react'

import { Card, CardBody, Image } from '@heroui/react'
import ReadFullArticleButton from '../buttons/read-full-article-button'
import ArticlePagination from '../paginations/article-pagination'

export default function ArticleCard() {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                {Array(9)
                    .fill(null)
                    .map((_, i) => (
                        <Card key={i} shadow="none" radius="lg" className="border-none">
                            <Image
                                src="https://placehold.jp/350x200.png"
                                alt="Article Image"
                                radius="lg"
                                className="w-full h-[200px] object-cover"
                            />
                            <CardBody className="p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="uppercase text-secondary text-sm md:text-base font-semibold tracking-wide">
                                        Name Category
                                    </span>
                                    <span className="text-secondary text-xs md:text-sm opacity-70">
                                        5 min Read
                                    </span>
                                </div>
                                <h3 className="text-secondary font-semibold text-base md:text-[20px] mb-1">
                                    Title of Article...
                                </h3>
                                <p className="text-sm md:text-base text-secondary/80 leading-relaxed mb-4">
                                    Short description text...
                                </p>
                                <ReadFullArticleButton
                                    href={`/article/${i}`}
                                    size='md'
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
