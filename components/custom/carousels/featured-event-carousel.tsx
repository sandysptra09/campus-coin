import React, { useState, useEffect } from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Skeleton, Card } from '@heroui/react';
import EventCard from '../cards/event-card';
import { getFeaturedEvents } from '@/lib/getFeaturedEvents';

interface FeaturedEventCarouselProps {
    type: 'popular' | 'rewarding'
}

export default function FeaturedEventCarousel({ type }: FeaturedEventCarouselProps) {
    const [events, setEvents] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const data = await getFeaturedEvents(type)
            setEvents(data)
            setLoading(false)
        }
        fetchData()
    }, [type])

    return (
        <div className='mt-6'>
            <Carousel className="w-fit max-w-xs md:max-w-3xl lg:max-w-5xl">
                <CarouselContent className='py-4 px-2'>
                    {loading ? (
                        [...Array(16)].map((_, i) => (
                            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 md:px-4 mb-4">
                                <Card shadow="sm" radius="lg" className="w-full">
                                    <Skeleton className="h-[180px] w-full rounded-t-lg" />
                                    <div className="p-4 space-y-3">
                                        <Skeleton className="h-4 w-3/4 rounded-md" />
                                        <Skeleton className="h-3 w-1/2 rounded-md" />
                                        <div className="flex gap-2">
                                            <Skeleton className="h-3 w-1/4 rounded-md" />
                                            <Skeleton className="h-3 w-1/4 rounded-md" />
                                        </div>
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))
                    ) : events.length > 0 ? (
                        events.map((event) => (
                            <CarouselItem
                                key={event.id}
                                className="md:basis-1/2 lg:basis-1/3 pr-4 md:pr-0 md:px-4 mb-4"
                            >
                                <EventCard event={event} />
                            </CarouselItem>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">
                            No featured events found.
                        </p>
                    )}
                </CarouselContent>
                <div className="flex justify-center items-center gap-4 mt-6">
                    <CarouselPrevious className="static transform-none border shadow-sm w-10 h-10 hover:bg-gray-100" />
                    <CarouselNext className="static transform-none border shadow-sm w-10 h-10 hover:bg-gray-100" />
                </div>
            </Carousel>
        </div>
    )
}
