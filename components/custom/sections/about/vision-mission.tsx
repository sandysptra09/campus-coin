'use client';

import React from 'react';

import { Spacer, Card } from '@heroui/react';
import VissionMissionCard from '../../cards/vision-mission-card';
import VissionMissionCardMobile from '../../cards/vision-mission-mobile-card';

export default function VisionMission() {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-40 relative">
            <div className="block md:hidden">
                <Card shadow="md" radius='lg' className="p-8 text-center">
                    <h2 className="text-xl text-secondary font-bold mt-2 leading-snug">
                        Our Vision & Mission
                    </h2>

                    <VissionMissionCardMobile />
                </Card>
            </div>

            <div className="hidden md:block">
                <Card shadow='md' radius='lg' className="relative p-10 text-center">
                    <h2 className="text-xl md:text-[45px] text-secondary font-bold mt-2 leading-snug">
                        Our Vision & Mission
                    </h2>
                    <Spacer y={20} />
                </Card>

                <div className="relative w-full flex justify-center -mt-16 z-10">
                    <VissionMissionCard />
                </div>
            </div>
        </section>
    );
}
