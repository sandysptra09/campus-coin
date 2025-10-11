'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { Image } from '@heroui/react'

export default function RedeemPreview() {
    const rewards = [
        'https://placehold.jp/250x130.png',
        'https://placehold.jp/250x175.png',
        'https://placehold.jp/250x130.png',
        'https://placehold.jp/250x175.png',
        'https://placehold.jp/250x130.png',
        'https://placehold.jp/250x175.png',
    ]

    return (
        <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between bg-primary rounded-2xl overflow-hidden relative">
                <div className="w-full md:w-1/2 p-10 text-white space-y-4">
                    <p className="text-md md:text-[29px] uppercase font-medium">
                        REDEEM STORE PREVIEW
                    </p>
                    <h2 className="text-xl md:text-[40px] font-semibold leading-snug max-w-sm">
                        Exchange your CampusCoin for various attractive rewards.
                    </h2>
                </div>

                <div className="w-full md:w-1/2 relative h-[400px] overflow-hidden p-6">
                    <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-primary to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-primary to-transparent z-10" />

                    <div className="grid grid-cols-2 gap-4 relative h-full">
                        {[0, 1].map((col) => (
                            <motion.div
                                key={col}
                                animate={{ y: ['0%', '-50%'] }}
                                transition={{
                                    duration: 25,
                                    ease: 'linear',
                                    repeat: Infinity,
                                    delay: col === 0 ? 0 : 12.5,
                                }}
                                className="flex flex-col gap-4"
                            >
                                {[...rewards, ...rewards].map((img, i) => (
                                    <div
                                        key={`${col}-${i}`}
                                        className=""
                                    >
                                        <Image
                                            src={img}
                                            width={250}
                                            alt={`Reward ${i + 1}`}
                                            className="w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
