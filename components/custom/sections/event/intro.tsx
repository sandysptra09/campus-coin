'use client';

import React from 'react'

import IntroTechEvent from '../../banners/intro-tech-event';
import IntroPesentation from '../../banners/intro-pesentation';

export default function Intro() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-24'>
            <div className=''>
                <p className="text-md text-primary md:text-[29px] font-medium uppercase tracking-wide">
                    Explore Campus Activities
                </p>
                <p className="text-md text-secondary md:text-[25px] font-medium tracking-wide">
                    Join, Learn, and Earn Rewards
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <div className="flex-1 space-y-4">
                    <p className="text-secondary text-base mt-6 leading-[25px]">
                        CampusCoin connects students with various campus events, from seminars to workshops,
                        competitions, and community service. Each participation not only helps develop your
                        knowledge and network but also gives you reward points that can be exchanged for
                        exclusive benefits.
                    </p>
                </div>

                <div className="flex-1">
                    <IntroTechEvent />
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12">
                <div className="flex-1 space-y-4">
                    <p className="text-secondary text-base mt-6 leading-[25px]">
                        By joining campus events, you can collect coins, build connections,
                        and improve your skills. CampusCoin encourages students to be more
                        active and gain valuable experiences both academically and socially.
                    </p>
                </div>

                <div className="flex-1">
                    <IntroPesentation />
                </div>
            </div>
        </section>
    )
}
