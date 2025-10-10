import React from 'react'

import Link from 'next/link';
import { Image } from '@heroui/react'

type PopularArticle = {
    id: number | string;
    title: string;
    image: string;
    href?: string;
}

type PopularArticlesSidebarProps = {
    articles: PopularArticle[];
};

export default function PopularArticlesSidebar({ articles }: PopularArticlesSidebarProps) {
    return (
        <aside className="w-full space-y-6">
            <h2 className="text-[25px] text-secondary md:text-[29px] md:text-xl font-semibold">Popular</h2>
            <div className="space-y-6">
                {articles.map((article) => (
                    <Link
                        key={article.id}
                        href={article.href || "#"}
                        className="block group"
                    >
                        <Image
                            src={article.image}
                            alt={article.title}
                            radius="lg"
                            shadow="sm"
                            width="100%"
                            height={160}
                            className="object-cover"
                        />
                        <p className="mt-4 text-sm md:text-base font-semibold text-secondary leading-snug line-clamp-2 group-hover:underline">
                            {article.title}
                        </p>
                    </Link>
                ))}
            </div>
        </aside>
    );
}
