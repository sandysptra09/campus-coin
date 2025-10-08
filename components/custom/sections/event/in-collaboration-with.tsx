'use client';

import React from 'react'

import CollaborationCarousel from '../../carousels/collaboration-carousel';

export default function InCollaborationWith() {
    return (
        <section className='h-96 bg-black flex flex-col justify-center items-center p-6 my-12'>
            <h2 className="text-xl md:text-[45px] text-white font-bold text-center mt-2 leading-snug mb-12">
                In Collaboration With
            </h2>
            <CollaborationCarousel />
        </section>
    )
}
