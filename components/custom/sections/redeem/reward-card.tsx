import Link from "next/link";
import { CoinBadge } from "./coin-badge";
import { Image } from "@heroui/react";

export default function RewardCard({
  title,
  meta,
  coins,
  id,
  image,
}: {
  title: string;
  meta: string;
  coins: number;
  id: number;
  image: string;
}) {
  return (
    <Link href={`/redeem/${id}`}>
      <article>
        <div className="w-full">
          <Image
            src={image}
            alt="reward"
            className="w-full object-cover"
            height={200}
            width={1000}
          />
        </div>
        <h3 className="mt-3 line-clamp-2 text-base font-medium text-foreground">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{meta}</p>
        <div className="mt-3">
          <CoinBadge size={20} value={coins} />
        </div>
      </article>
    </Link>
  );
}
