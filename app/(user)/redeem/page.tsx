import Hero from "@/components/custom/sections/redeem/hero"
import RewardsCarousel from "@/components/custom/carousels/reward-carousel"
import TopProduct from "@/components/custom/sections/redeem/top-product"

const redeemItems = [
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
