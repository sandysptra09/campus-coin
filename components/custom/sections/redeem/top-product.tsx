"use client";

import { CoinBadge } from "./coin-badge";
import { Image } from "@heroui/react";

export default function TopProduct() {
  return (
    <div className="w-full">
      <h2 className="text-center text-brand text-xl font-semibold">
        Top Product
      </h2>
      <p className="mt-2 text-center text-base text-muted-foreground">
        CampusCoin most redeemed product
      </p>

      <article className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
        <Image
          src="https://placehold.jp/350x200.png"
          alt="Certification"
          width={2000}
          // height={300}
          className="w-full h-[200px] sm:h-[400px] object-cover rounded-xl"
        />

        <div className="mt-6">
          <p className="text-base text-muted-foreground">
            Certification | Professional
          </p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">
            IBM Certification Discount
          </h3>
          <div className="mt-4">
            <CoinBadge value={250} />
          </div>
        </div>
      </article>
    </div>
  );
}
