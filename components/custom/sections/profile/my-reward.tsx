'use client';

import React from 'react'

import { Card } from '@heroui/react';
import MyRewardCard from '../../cards/my-reward-card';

export default function MyReward() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-2 mt-8'>
            <Card shadow='sm' radius='lg' className='p-6 md:p-8'>
                <h3 className='text-base md:text-[25px] font-semibold text-secondary mb-6'>
                    My Rewards
                </h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <MyRewardCard
                        title='Web Development Competition Certificate'
                        image='/assets/images/rewards/my-rewards/web-development.png'
                        source='Reedem Store'
                        date='22 Desember 2024'
                        status='Claimed'
                    />
                    <MyRewardCard
                        title='React Mastery Course'
                        image='/assets/images/rewards/my-rewards/react-mastery.png'
                        source='Reedem Store'
                        date='5 Maret 2025'
                        status='Claimed'
                    />
                    <MyRewardCard
                        title='Community Contribution Certificate'
                        image='/assets/images/rewards/my-rewards/community-cleanup.png'
                        source='Event — Community Cleanup Day'
                        date='19 Januari 2025'
                        status='Claimed'
                    />
                </div>
            </Card>
        </section>
    )
}
