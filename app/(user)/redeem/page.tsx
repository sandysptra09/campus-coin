import Hero from "@/components/custom/sections/redeem/hero"
import RewardsCarousel from "@/components/custom/carousels/reward-carousel"
import TopProduct from "@/components/custom/sections/redeem/top-product"

import redeemItems from "@/data/redeem-items-mix.json"

export default function RedeemPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      <Hero />
      <section className="mt-16 md:mt-24">
        <RewardsCarousel item={redeemItems} />
      </section>
      <section className="mt-20 md:mt-24">
        <TopProduct />
      </section>
    </main>
  )
}
