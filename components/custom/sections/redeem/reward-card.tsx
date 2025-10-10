import Link from "next/link";
import { CoinBadge } from "./coin-badge";

export default function RewardCard({
  title,
  meta,
  coins,
  id,
}: {
  title: string;
  meta: string;
  coins: number;
  id: number
}) {
  return (
    <Link href={`/redeem/${id}`}>
      <article>
        <div className="aspect-[16/10] w-full rounded-lg border" />
        <h3 className="mt-3 line-clamp-2 text-sm font-medium text-foreground">
          {title}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">{meta}</p>
        <div className="mt-3">
          <CoinBadge value={coins} />
        </div>
      </article>
    </Link>
  );
}
