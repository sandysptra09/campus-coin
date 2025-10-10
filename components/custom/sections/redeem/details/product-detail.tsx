"use client";

import type React from "react";
import { CoinBadge } from "../coin-badge";
import { Button } from "@heroui/react";

export default function ProductDetail() {
  return (
    <section className="grid gap-8 py-10 md:grid-cols-2">
      <div className="rounded-[12px] border bg-card p-3 shadow-sm">
        <div className="relative aspect-square w-full rounded-[10px] border">
          <svg
            className="absolute inset-0 h-full w-full rounded-[10px]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-label="Product image placeholder"
          >
            <rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="var(--color-card)"
            />
            <path
              d="M0 0 L100 100 M100 0 L0 100"
              stroke="var(--color-border)"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-center">
          <h1 className="mb-3 text-base md:text-2xl font-semibold leading-snug text-pretty">
            Microsoft Certification Discount 35%
          </h1>
          <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
            35% discount for all microsoft paid professional certifications.
            Apply the code when you register.
          </p>

          <p className="mt-4 text-base text-muted-foreground">
            Certification | Professional
          </p>

          <div className="mt-4 flex items-center gap-2 text-base">
            <CoinBadge value={30} size={180} />
          </div>
        </div>
        <Button color="primary">Redeem</Button>
      </div>
    </section>
  );
}
