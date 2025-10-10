import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import TestimonialCard from '../cards/testimonial-card'

export default function TestimonialCarousel(props: { isButtonInside?: boolean, title?: string }) {
    return (
        <Carousel className="mt-6 w-full max-w-3xl mx-auto">
            <p className="text-md sm:text-lg xl:text-[29px] mb-5 text-primary text-medium">
                {(props.title) && props.title}
            </p>
            {props.isButtonInside ? (
                <></>
            ): (
                <div className="flex items-center justify-start md:items-start md:justify-start gap-2 mt-8">
                    <CarouselPrevious className="static transform-none border shadow-sm w-8 h-8 rounded-full bg-white hover:bg-gray-100" />
                    <CarouselNext className="static transform-none border shadow-sm w-8 h-8 rounded-full bg-white hover:bg-gray-100" />
                </div>
            )}
            <CarouselContent>
                {[...Array(3)].map((_, i) => (
                    <CarouselItem key={i}>
                        <TestimonialCard buttonIsInside={props.isButtonInside} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
