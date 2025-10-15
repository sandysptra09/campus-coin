'use client';

import React from 'react'

import { Card } from '@heroui/react';
import MyEventCard from '../../cards/my-event-card';

export default function MyEvent() {
    return (
        <section className=''>
            <Card shadow='sm' radius='lg' className='p-6 md:p-8'>
                <h3 className='text-base md:text-[25px] font-semibold text-secondary mb-6'>
                    My Events
                </h3>
                <div className=''>
                    <div className='flex flex-col gap-4'>
                        <MyEventCard
                            title='Campus Tech Expo 2025'
                            date='Oct 10, 2025'
                            status='Joined'
                            image='/assets/images/events/my-events/campus-tech.png'
                        />
                        <MyEventCard
                            title='AI Hackathon'
                            date='Nov 2, 2025'
                            status='Completed'
                            image='/assets/images/events/my-events/ai-hackathon.png'
                        />
                        <MyEventCard
                            title='Community Cleanup Day'
                            date='19 Januari 2025'
                            status='Completed'
                            image='/assets/images/events/my-events/community-cleanup.png'
                        />
                    </div>
                </div>
            </Card>
        </section>
    )
}
