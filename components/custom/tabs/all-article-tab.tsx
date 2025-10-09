import React from 'react'

import { Tabs, Tab } from '@heroui/react'
import ArticleCard from '../cards/article-card'

export default function AllArticleTab() {
    return (
        <Tabs
            aria-label="Article categories"
            variant="underlined"
            size='lg'
            className='w-xl flex md:flex-col'
            classNames={{
                tabList: "w-full relative rounded-none p-0 border-b border-divider border-[#B7B7B7]",
                tab: "text-md md:text-[25px] font-semibold tracking-wide data-[selected=true]:text-primary transition",
                cursor: "w-full bg-[#F2D443]",
                tabContent: "text-[#B7B7B7] group-data-[selected=true]:text-primary",
            }}
        >
            <Tab key="all" title="All">
                <ArticleCard />
            </Tab>
            <Tab key="career" title="Career">
                <ArticleCard />
            </Tab>
            <Tab key="education" title="Education">
                <ArticleCard />
            </Tab>
            <Tab key="sustainability" title="Sustainability">
                <ArticleCard />
            </Tab>
        </Tabs>
    )
}
