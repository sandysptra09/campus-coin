"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RewardCard from "../sections/redeem/reward-card";
import Link from "next/link";
import { RewardCarouselProps } from "@/interfaces/reward-carousel";

export default function RewardsCarousel({ item, title }: RewardCarouselProps) {
  return (
    <Carousel className="w-full">
      <p className="text-md sm:text-lg xl:text-[29px] mb-5 text-primary text-medium">
        {title}
      </p>
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-3">
          <CarouselPrevious className="static -translate-y-0 border shadow-sm w-10 h-10 hover:bg-gray-100" />
          <CarouselNext className="static -translate-y-0 border shadow-sm w-10 h-10 hover:bg-gray-100" />
        </div>
        <Link href={"/redeem/all"} className="h-full underline">
          See All
        </Link>
      </div>
      <CarouselContent>
        {item.map((e, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/4">
            <RewardCard
              key={e.title}
              title={e.title}
              meta={e.meta}
              coins={e.coins}
              id={e.id}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
