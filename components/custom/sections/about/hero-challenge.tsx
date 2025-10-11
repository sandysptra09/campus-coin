'use client'

import React from 'react'

import HeroChallengeBanner from '../../banners/hero-challenge-banner'
import HeroChallengeCard from '../../cards/hero-challenge-card'

export default function HeroChallenge() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
            <div>
                <p className="text-md text-primary md:text-[29px] font-medium uppercase tracking-wide">
                    The Challenge We Address
                </p>
                <h2 className="text-xl md:text-[45px] text-secondary font-bold mt-2 leading-snug">
                    Transforming <br /> Campus Engagement
                </h2>
                <p className="text-secondary text-base mt-6 leading-[25px]">
                    Indonesia still faces serious challenges in linking and matching higher education
                    with the needs of the world of work. Data from the Ministry of Manpower (2022) shows
                    that 33.5% of college graduates experience a mismatch with their field of work,
                    while an ILO report (2023) confirms that the skills gap is the main cause of youth
                    unemployment. Although the government has promoted the Merdeka Belajar–Kampus Merdeka
                    (MBKM) program, its implementation is still limited to academic aspects without consistent
                    incentive system support.
                </p>
                <p className="text-secondary text-base mt-4 leading-[25px]">
                    CampusCoin is here to fill that gap. With a point-based reward system, students are not only
                    encouraged to be active in academic, internship, and social activities, but also receive tangible
                    appreciation for their contributions. This approach supports the achievement of SDG 4 (Quality Education)
                    and SDG 8 (Decent Work & Economic Growth), while also helping students build skills, motivation, and
                    networks relevant to the world of work. Through this integrated ecosystem, students are empowered to see
                    their efforts rewarded beyond grades, creating a culture of continuous growth. At the same time,
                    institutions gain valuable insights into student engagement, making education more responsive and adaptive
                    to real-world demands.
                </p>
            </div>

            <div className='flex flex-col gap-8'>
                <HeroChallengeBanner />
                <HeroChallengeCard />
            </div>
        </section>
    )
}
