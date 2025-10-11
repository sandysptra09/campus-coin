import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import TestimonialCard from '../cards/testimonial-card'

export default function TestimonialCarousel() {
    return (
        <Carousel className="mt-6 w-full max-w-3xl mx-auto">
            <CarouselContent className='px-2 py-2 md:p-4 md:px-2 '>
                {[...Array(3)].map((_, i) => (
                    <CarouselItem key={i}>
                        <TestimonialCard />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
