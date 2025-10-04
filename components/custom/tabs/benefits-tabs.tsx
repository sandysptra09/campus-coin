'use client';

import React from 'react';

import BenefitsCard from '../cards/benefits-card';
import { benefitIcons } from '@/public/assets/icons/benefits-icon';
import { Tabs, Tab } from "@heroui/react";

const studentBenefits = [
    {
        icon: benefitIcons.student.motivation,
        text: "Higher motivation to actively participate in events, seminars, and campus activities.",
    },
    {
        icon: benefitIcons.student.reward,
        text: "Real rewards that can be exchanged for training, certification, or merchandise.",
    },
    {
        icon: benefitIcons.student.networking,
        text: "Extensive networking through collaborative activities with campuses and industries.",
    },
    {
        icon: benefitIcons.student.career,
        text: "Increased career readiness thanks to relevant experience and skills.",
    },
    {
        icon: benefitIcons.student.recognition,
        text: "Recognition of achievements for academic and non-academic contributions.",
    },
    {
        icon: benefitIcons.student.belonging,
        text: "Improved sense of belonging and active participation in the campus community.",
    },
];

const campusBenefits = [
    {
        icon: benefitIcons.campus.monitoring,
        text: "Transparent monitoring of student participation and contributions.",
    },
    {
        icon: benefitIcons.campus.data,
        text: "Measurable data for evaluating the success of MBKM programs and campus activities.",
    },
    {
        icon: benefitIcons.campus.collaboration,
        text: "Closer collaboration with industry through skill-based incentives.",
    },
    {
        icon: benefitIcons.campus.innovation,
        text: "Enhanced campus image as an innovative and adaptive institution.",
    },
    {
        icon: benefitIcons.campus.sdg,
        text: "Support for SDGs (Quality Education & Decent Work) through a sustainable reward system.",
    },
    {
        icon: benefitIcons.campus.reputation,
        text: "Stronger institutional reputation with active student involvement.",
    },
];

export default function BenefitsTabs() {
    return (
        <div className="mt-4 flex flex-col justify-center items-center">
            <Tabs
                aria-label="Benefits Tabs"
                variant="bordered"
                radius="md"
                size='md'
                classNames={{
                    tabList: "bg-white p-1 border-primary",
                    tab: "text-md px-6 py-2 font-medium ",
                    cursor: 'w-full bg-[#F2D443]',
                    tabContent: 'text-primary group-data-[selected=true]:text-white'
                }}
            >
                <Tab key="student" title="Student">
                    <BenefitsCard items={studentBenefits} />
                </Tab>
                <Tab key="campus" title="Campus">
                    <BenefitsCard items={campusBenefits} />
                </Tab>
            </Tabs>
        </div>
    );
}
