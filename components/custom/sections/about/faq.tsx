'use client';

import React from 'react'

import FAQAccordion from '../../accordions/faq-accordion';

export default function FAQ() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div>
                    <h2 className="text-xl md:text-[45px] font-bold text-secondary leading-snug">
                        Frequently Asked <br /> Questions
                    </h2>
                    <p className="mt-4 text-secondary text-base leading-[25px]">
                        Here's a quick answer to help you understand more about CampusCoin.
                    </p>
                </div>

                <div>
                    <FAQAccordion />
                </div>
            </div>
        </section>
    )
}
