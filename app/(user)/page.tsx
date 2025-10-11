'use client';

import React from 'react';

import Hero from '@/components/custom/sections/home/hero';
import EventHighlight from '@/components/custom/sections/home/event-highlight';
import RedeemPreview from '@/components/custom/sections/home/redeem-preview';

export default function LandingPage() {
  return (
    <main className='w-full min-h-screen'>
      <Hero />
      <EventHighlight />
      <RedeemPreview />
    </main>
  );
}
