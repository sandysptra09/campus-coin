'use client';

import React from 'react';
import { Progress } from '@heroui/react';

interface ProgressCardProps {
    value: number;
    xpText: string;
}

export default function ProgressCard({ value, xpText }: ProgressCardProps) {
    return (
        <div>
            <Progress
                aria-label='Level Progress'
                value={value}
                color='primary'
                size='md'
                className='w-full mb-2'
                radius='full'
            />
            <p className='text-sm md:text-base font-medium text-default-600'>{xpText}</p>
        </div>
    );
}
