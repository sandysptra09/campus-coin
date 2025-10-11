import React from "react";

type ArticleContentProps = {
    title: string;
    content: string;
};

export default function ArticleContent({ title, content }: ArticleContentProps) {
    return (
        <article className="prose prose-base md:prose-lg lg:prose-xl max-w-none">
            <h3 className="text-secondary text-xl md:text-[39px] font-semibold mb-6 leading-snug">
                {title}
            </h3>
            <div
                className="text-secondary/80 font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </article>
    );
}
