'use client';

import React from 'react'

import { Button, Link } from '@heroui/react';

export default function CTABanner() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
            <div className="bg-[#F2D443] rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-left max-w-2xl">
                    <p className="text-md md:text-[25px] text-white font-medium tracking-wide">
                        Start Your Campus Journey with CampusCoin Today!
                    </p>
                    <h2 className="text-xl md:text-[45px] font-semibold text-white leading-tight mt-3">
                        Discover opportunities, collect coins, and grow with your campus community.
                    </h2>
                </div>

                <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto max-w-[200px]">
                    <Button
                        as={Link}
                        radius="md"
                        size='lg'
                        href="/register"
                        className="bg-white text-secondary font-medium w-full"
                    >
                        Get Started
                    </Button>
                    <Button
                        as={Link}
                        radius="md"
                        size='lg'
                        href="/"
                        className="bg-black text-white font-medium w-full"
                    >
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    )
}
