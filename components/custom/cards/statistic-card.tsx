'use client';

import React from 'react';
import { Card, CardBody } from '@heroui/react';

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value: string | number;
}

export default function StatCard({ icon, title, value }: StatCardProps) {
    return (
        <Card
            shadow='sm'
            radius='lg'
            className='p-4 flex flex-col justify-center items-center text-center min-h-[120px]'
        >
            <CardBody className='flex flex-col justify-center items-center space-y-3'>
                <div className='bg-primary/10 p-3 rounded-xl text-primary'>{icon}</div>
                <p className='text-sm md:text-[14px]'>{title}</p>
                <p className='text-base md:text-[25px] font-semibold text-secondary'>{value}</p>
            </CardBody>
        </Card>
    );
}
