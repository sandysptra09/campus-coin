'use client';

import React from 'react'

import FeaturedEventTab from '../../tabs/featured-event-tab';

export default function FeaturedEvent() {
    return (
        <section className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
            <div className='grid gap-4 text-center md:gap-2'>
                <p className="text-md text-primary md:text-[29px] font-medium uppercase tracking-wide">
                    Featured Event
                </p>
                <p className="text-md text-secondary md:text-[25px] font-medium tracking-wide">
                    Highlighting Exciting Campus Activities
                </p>
                <FeaturedEventTab />
            </div>
        </section>
    )
}
