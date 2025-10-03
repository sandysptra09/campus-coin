import React from "react";

import HeroChallenge from "@/components/custom/sections/about/hero-challenge";
import Education from "@/components/custom/sections/about/education";
import VissionMission from "@/components/custom/sections/about/vission-mission";
import HowItWorks from "@/components/custom/sections/about/how-it-works";
import Benefits from "@/components/custom/sections/about/benefits";
import FAQ from "@/components/custom/sections/about/faq";
import CTABanner from "@/components/custom/sections/about/cta-banner";

export default function AboutPage({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return (
        <main className="w-full min-h-screen">
            <HeroChallenge />
            <Education />
            <VissionMission />
            <HowItWorks />
            <Benefits />
            <FAQ />
            <CTABanner />
        </main>
    )
}