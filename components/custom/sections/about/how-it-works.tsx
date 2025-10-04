'use client';

import React from 'react'

import HowItWorksVideoPlayer from '../../videos/how-it-works-video-player';

export default function HowItWorks() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 text-center'>
            <div className="grid gap-10 text-center md:gap-14">
                <h2 className="text-xl md:text-[45px] text-secondary font-bold mt-2 leading-snug">
                    How It Works?
                </h2>
                <HowItWorksVideoPlayer />
            </div>
        </section>
    )
}
