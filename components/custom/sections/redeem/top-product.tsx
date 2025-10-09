import { CoinBadge } from "./coin-badge";

export default function TopProduct() {
  return (
    <div className="w-full">
      <h2 className="text-center text-brand text-xl font-semibold">Top Product</h2>
      <p className="mt-2 text-center text-sm text-muted-foreground">CampusCoin most redeemed product</p>

      <article className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
        <div className="aspect-[16/6] w-full overflow-hidden rounded-xl border bg-[#B7B7B7] relative">
          {/* Decorative diagonal placeholder lines */}
          <div className="absolute inset-0">
            <svg aria-hidden="true" width="100%" height="100%" preserveAspectRatio="none">
              <line x1="0" y1="100%" x2="100%" y2="0" stroke="currentColor" className="text-input/40" strokeWidth="1" />
              <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" className="text-input/40" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs text-muted-foreground">Certification | Professional</p>
          <h3 className="mt-2 text-lg font-semibold text-foreground">IBM Certification Discount</h3>
          <div className="mt-4">
            <CoinBadge value={250} />
          </div>
        </div>
      </article>
    </div>
  )
}
