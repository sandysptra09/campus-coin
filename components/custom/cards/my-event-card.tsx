import React from 'react';

import { Card, CardBody, Image, Badge, Chip } from '@heroui/react';
import { CalendarDays } from 'lucide-react';

interface MyEventCardProps {
    title: string;
    date: string;
    status: 'Joined' | 'Completed' | 'Upcoming';
    image: string;
}

export default function MyEventCard({ title, date, status, image }: MyEventCardProps) {
    const statusStyle = {
        Joined: {
            className: 'bg-primary/10 text-primary border border-primary/20',
        },
        Completed: {
            className: 'bg-green-100 text-green-600 border border-green-200',
        },
        Upcoming: {
            className: 'bg-yellow-100 text-yellow-600 border border-yellow-200',
        },
    }[status];

    return (
        <Card
            shadow='sm'
            radius='lg'
            className=''
        >
            <CardBody>
                <div className='grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center'>
                    <div className='relative col-span-6 md:col-span-4'>
                        <Image
                            alt={title}
                            src={image}
                            width='100%'
                            height={130}
                            shadow='md'
                            className='object-cover'
                        />
                    </div>
                    <div className='flex flex-col col-span-6 md:col-span-8 gap-3'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <h3 className='font-semibold text-secondary text-base'>{title}</h3>
                                <Chip
                                    variant='flat'
                                    size='sm'
                                    className={`${statusStyle.className} text-[12px] md:text-sm font-medium`}
                                >
                                    {status}
                                </Chip>
                            </div>
                        </div>

                        <div className='flex items-center gap-2 text-sm text-secondary mt-1'>
                            <CalendarDays className='w-4 h-4' />
                            <span>{date}</span>
                        </div>

                        <div className='h-[1px] bg-[#e5e5e5]' />

                        <p className='text-sm text-secondary font-medium leading-relaxed'>
                            Stay tuned for the upcoming updates and rewards related to this event!
                        </p>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
