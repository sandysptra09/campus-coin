'use client';

import React from 'react'

import TestimonialCarousel from '../../carousels/testimonial-carousel';

export default function Testimonial() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20'>
            <div className='text-center rounded-2xl p-10 md:p-14'>
                <p className="text-md text-primary md:text-[29px] uppercase font-medium tracking-wide">
                    What They Say
                </p>
                <TestimonialCarousel />
            </div>
        </section>
    )
}

