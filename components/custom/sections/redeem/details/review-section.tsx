import TestimonialCarousel from "@/components/custom/carousels/testimonial-carousel"
import type React from "react"
function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        d="M12 3.6l2.6 5.3 5.8.85-4.2 4.1.99 5.77L12 17.9l-5.19 2.72.99-5.77-4.2-4.1 5.8-.85L12 3.6z"
        fill="currentColor"
      />
    </svg>
  )
}

function Bar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-muted">
      <div className="h-2 rounded-full bg-[var(--brand)]" style={{ width: `${value}%` }} />
    </div>
  )
}

export default function ReviewSection() {
  return (
    <section className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
      <TestimonialCarousel isButtonInside={false} title={"What they say about this item"} />

      <div className="grid gap-4">
        <div className="flex items-center justify-end gap-2">
          <Star className="h-5 w-5 text-[color:var(--brand)]" />
          <span className="text-lg font-semibold">4.8</span>
        </div>

        <div className="grid gap-3 text-xs text-muted-foreground">
          {[5, 4, 3, 2, 1].map((n, idx) => (
            <div key={n} className="grid grid-cols-[16px_1fr] items-center gap-3">
              <span className="text-right">{n}</span>
              <Bar value={[88, 42, 24, 10, 6][idx]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
