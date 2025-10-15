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
                "Jelajahi masa depan transformasi digital bersama para ahli industri.",
            date: "30 September 2025",
            image: "/assets/images/events/event-highlights/tech-innovation.png",
            status: "open",
        },
        {
            title: "Community Service Program",
            description:
                "Contribute to society and gain valuable experiences outside class.",
            date: "Oct 12, 2025",
            image: "/assets/images/events/event-highlights/community-service.png",
            status: "open",
        },
        {
            title: "Coding Hackathon 2025",
            description:
                "Tantang dirimu dalam maraton coding 24 jam dengan hadiah.",
            date: "25 Desember, 2025",
            image: "/assets/images/events/event-highlights/coding-hackathon.png",
            status: "coming-soon",
        },
        {
            title: "Tech Career Festival 2025",
            description: "Festival karier yang mempertemukan mahasiswa dan perusahaan teknologi terkemuka di Indonesia.",
            date: "12 November 2025",
            image: "/assets/images/events/tech-career-festival-2025.png",
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
