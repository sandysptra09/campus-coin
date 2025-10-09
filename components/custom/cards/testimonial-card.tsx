import React from 'react'

import { CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardBody, Image } from '@heroui/react'

export default function TestimonialCard() {
    return (
        <Card
            shadow="sm"
            radius="lg"
            className="
        p-6 flex flex-col items-center text-center gap-6
        md:flex-row md:text-left md:items-center">
            <div className="order-1 md:order-2 flex-shrink-0">
                <Image
                    src="https://placehold.jp/150x150.png"
                    alt="Profile"
                    width={155}
                    height={150}
                    className="object-cover rounded-full md:rounded-xl"
                />
            </div>
            <div className="order-2 md:order-1 flex-1 space-y-2">
                <p className="font-semibold text-base md:text-[18px] text-secondary">
                    John Doe
                </p>
                <p className="text-sm md:text-[16px] text-[#B7B7B7]">
                    Bachelor of Software Engineering, UPI Cibiru
                </p>
                <p className="text-sm md:text-base text-secondary leading-relaxed">
                    "CampusCoin made it easier for me to get hired by Google. Highly
                    recommended for students who are active in college, such as
                    participating in organizations, competitions, etc."
                </p>
                <div className="flex items-center justify-center md:items-start md:justify-start gap-4 mt-8">
                    <CarouselPrevious className="static transform-none border shadow-sm w-8 h-8 rounded-full bg-white hover:bg-gray-100" />
                    <CarouselNext className="static transform-none border shadow-sm w-8 h-8 rounded-full bg-white hover:bg-gray-100" />
                </div>
            </div>
        </Card>
    )
}
