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
            <CarouselContent>
                {[...Array(3)].map((_, i) => (
                    <CarouselItem key={i}>
                        <TestimonialCard />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
