import { cn } from "@/lib/utils";

export function CoinBadge({
  value,
  className,
  size,
}: {
  value: string | number;
  className?: string;
  size?: number
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-foreground",
        className
      )}
    >
      <svg
        width={size && '30'}
        height={size && '30'}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.75 0.25H18.25V2.5H4.75V0.25ZM2.5 4.75V2.5H4.75V4.75H2.5ZM2.5 18.25V4.75H0.25V18.25H2.5ZM4.75 20.5V18.25H2.5V20.5H4.75ZM18.25 20.5V22.75H4.75V20.5H18.25ZM20.5 18.25V20.5H18.25V18.25H20.5ZM20.5 4.75H22.75V18.25H20.5V4.75ZM20.5 4.75V2.5H18.25V4.75H20.5ZM10.375 3.625H12.625V5.875H16V8.125H9.25V10.375H16V17.125H12.625V19.375H10.375V17.125H7V14.875H13.75V12.625H7V5.875H10.375V3.625Z"
          fill="#F2D443"
        />
      </svg>

      <span className="text-sm text-foreground">{value} Coin</span>
    </div>
  );
}