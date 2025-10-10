'use client';

import React from 'react'

import TestimonialCarousel from '../../carousels/testimonial-carousel';

export default function Testimonial() {
  return (
    <section className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20'>
      <div className='bg-primary rounded-2xl p-10 md:p-14'>
        <div className="text-center flex flex-col gap-2">
          <p className="text-md text-white md:text-[25px] font-medium tracking-wide">
            What They Say
          </p>
          <p className="text-white text-base leading-[25px]">
            Students who have used CampusCoin share their experiences.
          </p>
        </div>
        <TestimonialCarousel isButtonInside={true} />
      </div>
    </section>
  )
}

