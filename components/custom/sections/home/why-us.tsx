'use client';

import React from 'react'

import WhyUsImage from '../../images/why-us-image';

export default function WhyUs() {
    const reasons = [
        {
            imageUrl: '/assets/images/motivation.png',
            title: "Motivation",
            desc: "Grow together with the academic community. Participate in various events that encourage productivity, self-improvement, and continuous learning.",
        },
        {
            imageUrl: '/assets/images/real-rewards.png',
            title: "Real Reward",
            desc: "Learning with tangible benefits. Collect CampusCoins and redeem them for exclusive merchandise, vouchers, and event tickets.",
        },
        {
            imageUrl: '/assets/images/networking.png',
            title: "Networking",
            desc: "Expand your professional and academic connections. Meet new peers, collaborate across disciplines, and build networks that support your future career.",
        },
        {
            imageUrl: '/assets/images/achievment.png',
            title: "Achievment",
            desc: "Showcase your accomplishments. Earn badges, certificates, and recognition that strengthen your academic and professional portfolio.",
        },
    ];

    return (
        <section className='bg-white mt-20 py-20 rounded-xl border shadow-md'>
            <div className='mx-auto px-6 md:px-12 lg:px-20'>
                <div className="text-left mb-4">
                    <p className="text-md text-primary md:text-[29px] uppercase font-medium">
                        Why Us
                    </p>
                    <h1 className="text-xl md:text-[40px] text-secondary font-medium mt-2 leading-snug">
                        Empowering students with growth, rewards, connections, and achievements.
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-10">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="px-6 py-10 flex flex-col items-start text-center"
                        >
                            <div className="mb-6">
                                <WhyUsImage imageUrl={item.imageUrl} />
                            </div>
                            <h3 className="text-[20px] md:text-[25px] font-semibold text-secondary mb-3">
                                {item.title}
                            </h3>
                            <p className="text-secondary text-sm md:text-base text-justify leading-relaxed max-w-xs">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
