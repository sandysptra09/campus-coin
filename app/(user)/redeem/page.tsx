import Hero from "@/components/custom/sections/redeem/hero"
import RewardsCarousel from "@/components/custom/carousels/reward-carousel"
import TopProduct from "@/components/custom/sections/redeem/top-product"

const redeemItems = [
  {
    id: 1,
    title: "IxDF UI/UX Workshop",
    meta: "Workshop | Online | Professional",
    coins: 25,
    image: 'https://placehold.jp/350x200.png'
  },
  {
    id: 2,
    title: "101 Softskills Webinar",
    meta: "Webinar | Online | Professional",
    coins: 20,
    image: 'https://placehold.jp/350x200.png'
  },
  {
    id: 3,
    title: "Coursera Subscription Discount",
    meta: "Certification | Professional",
    coins: 75,
    image: 'https://placehold.jp/350x200.png'
  },
  {
    id: 4,
    title: "Microsoft Certificate Discount",
    meta: "Certification | Professional",
    coins: 100,
    image: 'https://placehold.jp/350x200.png',
  },
  {
    id: 5,
    title: "IBM Certificate Discount",
    meta: "Certification | Professional",
    coins: 250,
    image: 'https://placehold.jp/350x200.png',
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
