import React from "react";

import Hero from "@/components/custom/sections/event/hero";
import Intro from "@/components/custom/sections/event/intro";
import AllEvent from "@/components/custom/sections/event/all-event";
import FeaturedEvent from "@/components/custom/sections/event/featured-event";
import Testimonial from "@/components/custom/sections/event/testimonial";

export default function EventPage({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return (
        <main className="w-full min-h-screen">
            <Hero />
            <Intro />
            <AllEvent />
            <FeaturedEvent />
            <Testimonial />
        </main>
    )
}