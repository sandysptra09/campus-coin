import React from 'react'

import { Breadcrumbs, BreadcrumbItem } from '@heroui/react'

type BreadcrumbNavigationProps = {
    name_page: string;
    title: string;
}

export default function BreadcrumbNavigation({
    name_page,
    title
}: BreadcrumbNavigationProps) {
    return (
        <div className='flex flex-col flex-wrap gap-4'>
            <Breadcrumbs
                className="text-sm md:text-base text-secondary font-medium"
                size='lg'
                separator="/"
            >
                <BreadcrumbItem
                    href="#"
                    className=""
                >
                    {name_page}
                </BreadcrumbItem>
                <BreadcrumbItem className="">
                    {title}
                </BreadcrumbItem>
            </Breadcrumbs>
        </div>
    );
}
