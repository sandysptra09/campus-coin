'use client';

import React from 'react'

import BenefitsTabs from '../../tabs/benefits-tabs';

export default function Benefits() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
            <div className='grid gap-10 text-center md:gap-4'>
                <h2 className="text-xl md:text-[45px] text-secondary font-bold mt-2 leading-snug">
                    Benefits for Students & Campuses
                </h2>
                <p className="text-md text-secondary md:text-[25px] font-medium  tracking-wide">
                    Creating a win-win solution for the academic ecosystem.
                </p>
                <BenefitsTabs />
            </div>
        </section>
    )
}
