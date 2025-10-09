import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

import EventCard from '../cards/event-card';

export default function FeaturedEventCarousel() {
    return (
        <div className='mt-6'>
            <Carousel className="w-fit max-w-xs md:max-w-3xl lg:max-w-5xl">
                <CarouselContent className='py-4 px-2'>
                    {[...Array(9)].map((_, i) => (
                        <CarouselItem key={i} className='md:basis-1/2 lg:basis-1/3 md:px-4 mb-4'>
                            <EventCard />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center items-center gap-4 mt-6">
                    <CarouselPrevious className="static transform-none border shadow-sm w-10 h-10 hover:bg-gray-100" />
                    <CarouselNext className="static transform-none border shadow-sm w-10 h-10 hover:bg-gray-100" />
                </div>
            </Carousel>
        </div>
    )
}
