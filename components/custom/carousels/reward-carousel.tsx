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

const items = [
  {
    title: "IxDF UI/UX Workshop",
    meta: "Workshop | Online | Professional",
    coins: 25,
  },
  {
    title: "101 Softskills Webinar",
    meta: "Webinar | Online | Professional",
    coins: 20,
  },
  {
    title: "Coursera Subscription Discount",
    meta: "Certification | Professional",
    coins: 75,
  },
  {
    title: "Microsoft Certificate Discount",
    meta: "Certification | Professional",
    coins: 100,
  },
  {
    title: "IBM Certificate Discount",
    meta: "Certification | Professional",
    coins: 250,
  },
];

export default function RewardsCarousel() {
  return (
    <Carousel className="w-full">
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
        {items.map((e, index) => (
          <CarouselItem key={index} className="basis-1/4">
            <RewardCard
              key={e.title}
              title={e.title}
              meta={e.meta}
              coins={e.coins}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
