import React from 'react';

import { Card, CardBody, Image, Chip } from '@heroui/react';

interface MyRewardCardProps {
    title: string;
    image: string;
    source: string;
    date: string;
    status: 'Claimed' | 'Pending' | 'Unlocked';
}

export default function MyRewardCard({ title, image, source, date, status }: MyRewardCardProps) {
    const statusStyle = {
        Claimed: {
            className: 'bg-green-100 text-green-600 border border-green-200',
        },
        Pending: {
            className: 'bg-yellow-100 text-yellow-600 border border-yellow-200',
        },
        Unlocked: {
            className: 'bg-primary/10 text-primary border border-primary/20',
        },
    }[status];

    return (
        <Card
            shadow='sm'
            radius='lg'
            className='hover:shadow-md transition-all duration-300'
        >
            <Image
                alt={title}
                src={image}
                width='100%'
                height={160}
                className='object-cover w-full rounded-t-lg'
            />
            <CardBody className='p-4 flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <h4 className='font-semibold text-secondary text-base'>
                        {title}
                    </h4>

                    <Chip
                        variant='flat'
                        size='sm'
                        className={`${statusStyle.className} text-[12px] md:text-sm font-medium`}
                    >
                        {status}
                    </Chip>
                </div>

                <p className='text-sm text-secondary'>
                    Diperoleh dari: <span className='font-medium text-default-700'>{source}</span>
                </p>

                <p className='text-xs text-default-400 font-medium'>{date}</p>
            </CardBody>
        </Card>
    );
}
