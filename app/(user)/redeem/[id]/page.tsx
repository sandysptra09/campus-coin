import ProductDetail from "@/components/custom/sections/redeem/details/product-detail";
import ReviewSection from "@/components/custom/sections/redeem/details/review-section";

export default async function RedeemPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 md:px-6 py-10">
        <ProductDetail id={id} />
        <hr className="my-10 border-[color:var(--color-border)]" />
        <ReviewSection />
      </main>
    </>
  );
}
