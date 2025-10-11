'use client';

import React from 'react'

import EventHighlightCarousel from '../../carousels/event-highlight-carousel';

export default function EventHighlight() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20'>
            <div className='text-center'>
                <p className="text-md text-primary md:text-[29px] uppercase font-medium">
                    Event Highlight
                </p>
                <h1 className="text-xl md:text-[40px] text-secondary font-medium mt-2 leading-snug">
                    Stay updated with the latest activities and opportunities on campus.
                </h1>
                <EventHighlightCarousel />
            </div>
        </section>
    )
}
