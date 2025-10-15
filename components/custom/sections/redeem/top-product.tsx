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
          src="https://media.licdn.com/dms/image/v2/C4D12AQG_U1oKc3kyHg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520216969279?e=2147483647&v=beta&t=3W-9NArIqQgOFYRwR65vzbiEKJsHOrqUvQ1WGU620fE"
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
