'use client';

import React from 'react'

import FAQAccordion from '../../accordions/faq-accordion';

const faqs = [
    {
        question: "Does CampusCoin use real money?",
        answer:
            "No, CampusCoin is a digital point system, not a currency. So you can participate without worrying about additional costs.",
    },
    {
        question: "How do I earn coins?",
        answer:
            "Participate in campus events, social activities, or competitions registered in the system. The more active you are, the more coins you can collect.",
    },
    {
        question: "What rewards can be exchanged?",
        answer:
            "Exclusive merchandise, event tickets, and access to training/certification. These rewards are constantly updated to meet student needs.",
    },
    {
        question: "Can all students participate?",
        answer:
            "Yes, all students from campuses registered in the system can participate. Simply log in with your campus account to start using CampusCoin.",
    },
    {
        question: "Does CampusCoin support the MBKM program?",
        answer:
            "Yes, coins can be awarded for MBKM activities such as internships, research, and community service. This helps connect academic achievements with real-world experience.",
    },
];


export default function FAQ() {
    return (
        <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-10'>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div>
                    <h2 className="text-xl md:text-[45px] font-bold text-secondary leading-snug">
                        Frequently Asked <br /> Questions
                    </h2>
                    <p className="mt-4 text-secondary text-base leading-[25px]">
                        Here&apos;s a quick answer to help you understand more about CampusCoin.
                    </p>
                </div>

                <div>
                    <FAQAccordion item={faqs} />
                </div>
            </div>
        </section>
    )
}
