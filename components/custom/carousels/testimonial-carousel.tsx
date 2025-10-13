import React, { useEffect, useState } from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import TestimonialCard from '../cards/testimonial-card'
import { getTestimonials } from '@/lib/getTestimonials'

export default function TestimonialCarousel({
    isButtonInside,
    title,
}: {
    isButtonInside?: boolean
    title?: string
}) {
    const [testimonials, setTestimonials] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTestimonials()
            setTestimonials(data)
        }
        fetchData()
    }, [])

    return (
        <Carousel className="mt-6 w-full max-w-3xl mx-auto">
            {title && (
                <p className="text-md sm:text-lg xl:text-[29px] mb-5 text-primary text-medium">
                    {title}
                </p>
            )}

            {!isButtonInside && (
                <div className="flex items-center justify-start gap-2 mt-8">
                    <CarouselPrevious className="static transform-none border shadow-sm w-8 h-8 rounded-full bg-white hover:bg-gray-100" />
                    <CarouselNext className="static transform-none border shadow-sm w-8 h-8 rounded-full bg-white hover:bg-gray-100" />
                </div>
            )}

            <CarouselContent className="px-2 py-2 md:p-4 md:px-2 ">
                {testimonials.map((testimonial, i) => (
                    <CarouselItem key={i}>
                        <TestimonialCard
                            testimonial={testimonial}
                            buttonIsInside={isButtonInside}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
