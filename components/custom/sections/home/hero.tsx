'use client';

import React, { useRef } from 'react'

import HeroHome from '../../banners/hero-home';
import { Button } from '@heroui/react';
import { ArrowDown } from 'lucide-react';
import WhyUs from './why-us';

export default function Hero() {
    const whyUsRef = useRef<HTMLDivElement | null>(null);

    const scrollToWhyUs = () => {
        if (whyUsRef.current) {
            whyUsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={{
            background: 'linear-gradient(to bottom, #F6F6F6 65%, #FFFFFF 65%)',
        }}>
            <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
                <div className='flex flex-col-reverse md:flex-row items-center gap-10'>
                    <div className='flex-1 space-y-4 text-center md:text-left'>
                        <h1 className="text-xl md:text-[45px] text-secondary font-medium mt-2 leading-snug">
                            Discover <span className="text-secondary font-bold">Campus</span>
                            <span className='text-primary font-bold'>Coin</span>
                            <br />
                            <span className='font-semibold'>Rewarding Your Campus Life</span>
                        </h1>
                        <p className="text-md text-secondary md:text-[29px] font-medium">
                            Connect, collect, and celebrate your campus journey.
                        </p>
                        <div className="h-2 bg-primary mx-auto md:mx-0 rounded"></div>
                        <p className="text-base md:text-[20px] text-secondary text-justify max-w-md mx-auto md:mx-0">
                            CampusCoin is a digital reward system designed to make your campus journey more exciting.
                            Earn coins by joining events, contributing to the community, and redeem them for exclusive rewards.
                        </p>
                    </div>
                    <div className='flex-1 flex justify-center'>
                        <HeroHome />
                    </div>
                </div>
                <div className="flex justify-start mt-8 ml-34 md:ml-48">
                    <Button
                        isIconOnly
                        color="default"
                        radius="full"
                        size="md"
                        className="bg-black"
                        onPress={scrollToWhyUs}
                    >
                        <ArrowDown className="text-white" size={20} />
                    </Button>
                </div>
                <WhyUs ref={whyUsRef} />
            </section>
        </div>
    )
}
