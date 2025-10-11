'use client';

import React from 'react'

import CollaborationCarousel from '../../carousels/collaboration-carousel';

export default function InCollaborationWith() {
    return (
        <section className="bg-black py-20 px-6 flex flex-col items-center justify-center">
            <div className="max-w-6xl w-full flex flex-col items-center text-center">
                <h2 className="text-2xl md:text-[45px] text-white font-bold leading-snug mb-12">
                    In Collaboration With
                </h2>
                <CollaborationCarousel />
            </div>
        </section>
    )
}
