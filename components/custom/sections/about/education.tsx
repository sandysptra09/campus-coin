'use client'

import React from 'react'

import EducationBanner from '../../banners/education-banner'

export default function Education() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-12'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-8 items-start">
                <h2 className="text-xl md:text-[45px] font-bold text-secondary leading-snug">
                    Education-Powered. <br />
                    Future-Focused. <br />
                    Community-Led.
                </h2>
                <p className="text-secondary text-base mt-6 leading-[25px] max-w-md">
                    CampusCoin is here to open up more inclusive access to education while creating
                    new opportunities for students. We are building an ecosystem that encourages
                    learning, collaboration, and opportunities for mutual growth. Join us
                    in creating a more equitable and sustainable future for education.
                </p>
            </div>
            <EducationBanner />
        </section>
    )
}
