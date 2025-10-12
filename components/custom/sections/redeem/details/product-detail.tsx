"use client";

import type React from "react";
import { CoinBadge } from "../coin-badge";
import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

export default function ProductDetail() {
  return (
    <section className="grid gap-8 py-10 md:grid-cols-2">
      <Image
        src={"https://placehold.jp/350x200.png"}
        alt="reward"
        className="w-full h-full object-cover"
        width={1000}
      />

      <div className="flex flex-col justify-between gap-10 my-6">
        <div className="flex flex-col justify-center">
          <h1 className="mb-3 text-lg md:text-2xl font-semibold leading-snug text-pretty">
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
            <CoinBadge value={30} size={30} />
          </div>
        </div>
        <Button color="primary">Redeem</Button>
      </div>
    </section>
  );
}
