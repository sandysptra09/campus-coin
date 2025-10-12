'use client';

import React from 'react';
import { Trophy, Gift, BookOpen, Calendar } from 'lucide-react';
import StatCard from '../../cards/statistic-card';
import ProgressCard from '../../cards/progress-card';
import { Card } from '@heroui/react';

export default function Overview() {
    return (
        <section className=''>
            <Card shadow='sm' radius='lg' className='p-6 md:p-8'>
                <h3 className='text-base md:text-[25px] font-semibold text-secondary mb-6'>
                    Overview
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mb-6'>
                    <StatCard icon={<Trophy className='w-7 h-7' />} title='Total Coins' value='1,240' />
                    <StatCard icon={<Calendar className='w-7 h-7' />} title='Events Joined' value='8' />
                    <StatCard icon={<BookOpen className='w-7 h-7' />} title='Articles' value='15' />
                    <StatCard icon={<Gift className='w-7 h-7' />} title='Total Rewards' value='5' />
                </div>
                <ProgressCard
                    value={80}
                    xpText='200 coins left to Silver Level'
                />
            </Card>
        </section>
    );
}
