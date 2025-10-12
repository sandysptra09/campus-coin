import React, { useState } from 'react'

import { Tabs, Tab } from '@heroui/react'
import FeaturedEventCarousel from '../carousels/featured-event-carousel'

export default function FeaturedEventTab() {
    const [selectedKey, setSelectedKey] = useState<string>('popular')

    return (
        <div className='mt-4 flex flex-col justify-center items-center'>
            <Tabs
                aria-label="Featured Event Tabs"
                selectedKey={selectedKey}
                onSelectionChange={(key) => setSelectedKey(key as string)}
                variant="bordered"
                radius="md"
                size='md'
                classNames={{
                    tabList: "bg-white p-1 border-primary",
                    tab: "text-md px-6 py-2 font-medium text-[14px] group data-[selected=true]:bg-primary data-[selected=true]:text-white transition",
                    cursor: 'w-full bg-[#F2D443]',
                    tabContent: 'text-primary group-data-[selected=true]:text-white'
                }}
            >
                <Tab key="popular" title="Popular">
                    <FeaturedEventCarousel type='popular' />
                </Tab>
                <Tab key="rewarding" title="Rewarding">
                    <FeaturedEventCarousel type='rewarding' />
                </Tab>
            </Tabs>
        </div>
    )
}
