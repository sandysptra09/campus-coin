'use client';

import React from 'react'

import FAQAccordion from '../../accordions/faq-accordion';

const faqs = [
    {
        question: "How can I exchange my certificate?",
        answer:
            "Simply fill out the form and submit your certificate. Let the validator check your certifcate credibility and wait for the results.",
    },
    {
        question: "Is there any cost?",
        answer:
            "No, the exchange program is 100% free.",
    },
    {
        question: "What kind of certificate that is eligible for exchange?",
        answer:
            "You can submit various kind of certificates. For example organizations, volunteer, competition, training etc.",
    },
];

export default function FAQ() {
    return (
        <section className='w-full mx-auto px-6 md:px-12 lg:px-20 py-20'>
            <div className="grid md:grid-cols-1 gap-4 md:gap-8">
                <div>
                    <h2 className="text-lg lg:text-3xl font-semibold text-secondary text-center leading-snug">
                        Frequently Asked <br /> Questions
                    </h2>
                </div>

                <div>
                    <FAQAccordion item={faqs} />
                </div>
            </div>
        </section>
    )
}
