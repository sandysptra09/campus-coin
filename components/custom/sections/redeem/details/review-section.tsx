"use client";

import TestimonialCarousel from "@/components/custom/carousels/testimonial-carousel";
import { Progress } from "@heroui/react";
import { FaStar } from "react-icons/fa6";
import type React from "react";

export default function ReviewSection() {
  return (
    <section className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
      <div className="w-[300px] md:w-[400px] lg:w-full mx-auto">
        <TestimonialCarousel isButtonInside={false} title={"What they say about this item"} />
      </div>

      <div className="grid gap-4">
        <div className="flex items-end justify-end gap-2">
          <div className="flex gap-2">
            <FaStar className="my-auto text-primary" size={20} />
            <p className="text-lg font-semibold">4.8</p>
          </div>
        </div>

        <div className="grid gap-3 text-base text-muted-foreground">
          {[5, 4, 3, 2, 1].map((n, idx) => (
            <div
              key={n}
              className="grid grid-cols-[16px_1fr] items-center gap-3"
            >
              <span className="text-right">{n}</span>
              <Progress aria-label="Loading..." value={[88, 42, 24, 10, 6][idx]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
