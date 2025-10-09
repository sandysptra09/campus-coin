"use client"

import { Button } from "@heroui/react"
import Image from "next/image"

export default function Hero() {
  return (
    <header className="flex flex-col-reverse items-center gap-24 md:grid md:grid-cols-2">
      <div className="max-w-xl">
        <h1 className="text-pretty text-3xl font-semibold leading-snug md:text-4xl text-foreground">
          From activity to reward,
          <br /> gain new knowledge
          <br /> and chances!
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-md">
          Choose your best reward to support your study, career, and your campus activity.
        </p>
        <div className="mt-6">
            <Button className="w-full" color="primary">Explore</Button>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm md:max-w-md">
        <Image
          src="/images/gift.png"
          alt="Gift box with golden ribbon"
          width={640}
          height={640}
          className="h-auto w-full"
          priority
        />
      </div>
    </header>
  )
}
