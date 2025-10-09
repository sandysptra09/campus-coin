"use client"

import RewardCard from "./reward-card"

const items = [
  { title: "IxDF UI/UX Workshop", meta: "Workshop | Online | Professional", coins: 25 },
  { title: "101 Softskills Webinar", meta: "Webinar | Online | Professional", coins: 20 },
  { title: "Coursera Subscription Discount", meta: "Certification | Professional", coins: 75 },
  { title: "Microsoft Certificate Discount", meta: "Certification | Professional", coins: 100 },
]

export default function RewardsCarousel() {
  return (
    <div id="rewards" className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            className="grid size-8 place-items-center rounded-full border text-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M12.5 16 6.5 10l6-6"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            className="grid size-8 place-items-center rounded-full border text-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="m7.5 16 6-6-6-6"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <a href="#" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:underline">
          See all
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <RewardCard key={it.title} title={it.title} meta={it.meta} coins={it.coins} />
        ))}
      </div>
    </div>
  )
}
