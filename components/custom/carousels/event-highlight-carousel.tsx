"use client";

import React from "react";

import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

import EventHighlightCard from "../cards/event-highlight-card";

export default function EventHighlightCarousel() {
    const events = [
        {
            title: "Tech Innovation Seminar",
            description:
                "Explore the future of digital transformation with industry experts.",
            date: "Sept 30, 2025",
            image: "https://placehold.jp/350x200.png",
            status: "open",
        },
        {
            title: "Community Service Program",
            description:
                "Contribute to society and gain valuable experiences outside class.",
            date: "Oct 12, 2025",
            image: "https://placehold.jp/350x200.png",
            status: "coming-soon",
        },
        {
            title: "Coding Hackathon 2025",
            description:
                "Challenge yourself in a 24-hour coding marathon with prizes.",
            date: "Sept 30, 2025",
            image: "https://placehold.jp/350x200.png",
            status: "open",
        },
        {
            title: "Career Festival 2025",
            description: "Connect with companies and discover future opportunities.",
            date: "Nov 5, 2025",
            image: "https://placehold.jp/350x200.png",
            status: "coming-soon",
        },
    ];

    return (
        <div className="w-full py-10">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                opts={{
                    align: "center",
                    loop: true,
                }}
                className="max-w-5xl mx-auto"
            >
                <CarouselContent className="py-4 px-2">
                    {events.map((event, i) => (
                        <CarouselItem
                            key={i}
                            className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                        >
                            <div className="">
                                <EventHighlightCard singleEvent={event} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
