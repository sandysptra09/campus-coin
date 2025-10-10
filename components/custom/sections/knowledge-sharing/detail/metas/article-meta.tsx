import React from "react";

import ArticleIcon from "@/public/assets/icons/article-icon";

type ArticleMetaProps = {
    category: string;
    readTime: string;
};

export default function ArticleMeta({ category, readTime }: ArticleMetaProps) {
    return (
        <div className="flex items-center gap-8 mb-6 pb-3">
            <div className='flex items-center gap-2'>
                <ArticleIcon />
                <span className="uppercase text-secondary text-sm md:text-base font-semibold tracking-wide">
                    {category}
                </span>
            </div>
            <span className="text-secondary text-xs md:text-sm opacity-70">
                {readTime}
            </span>
        </div>
    );
}
