'use client';

import React from 'react'

export default function Hero() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
            <div className="flex flex-col text-center items-center justify-center gap-2">
                <h1 className="text-xl md:text-[45px] text-secondary font-bold mt-2 leading-snug">
                    Explore, Join, and Earn Rewards!
                </h1>
                <p className="text-secondary text-base mt-6 leading-[25px] max-w-3xl">
                    CampusCoin opens the door to a variety of exciting opportunities on campus.
                    From events, workshops, competitions, to social activities —
                    each participation not only broadens your knowledge and network,
                    but also gives you reward points that can be exchanged for various benefits.
                </p>
            </div>
        </section>
    )
}
