import React from 'react'

import Hero from '@/components/custom/sections/profile/hero'
import Overview from '@/components/custom/sections/profile/overview'
import MyEvent from '@/components/custom/sections/profile/my-event'
import MyArticle from '@/components/custom/sections/profile/my-article'

export default function ProfilePage({ }: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  return (
    <main className='w-full min-h-screen'>
      <Hero />
      <div className='max-w-6xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <Overview />
        <MyEvent />
      </div>
      <MyArticle />
    </main>
  )
}
