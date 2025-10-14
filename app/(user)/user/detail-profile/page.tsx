import React from 'react'

import MyProfile from '@/components/custom/sections/detail-profile/my-profile'

export default function DetailProfilePage({ }: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    return (
        <main className='w-full min-h-screen'>
            <MyProfile />
        </main>
    )
}
