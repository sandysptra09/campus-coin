import { LeaderboardTableProps } from "@/interfaces/leaderboard-table"
import { Card } from "@heroui/react"
import { Avatar } from "@heroui/react"

export function LeaderboardTable({ items }: LeaderboardTableProps) {
  return (
    <div className="mt-20">
      <div className="hidden md:grid grid-cols-[80px_1fr_1fr_120px] text-sm md:text-base text-muted-foreground px-5 mb-2">
        <div>Rank</div>
        <div>Name</div>
        <div>Major</div>
        <div className="text-right pr-2">Coins</div>
      </div>
      <div className="space-y-3">
        {items.map((r) => (
          <Card key={r.rank} shadow="sm" radius="sm" className="px-5 py-3">
            <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr_120px] items-center gap-3">
              <div className="flex items-center md:justify-start">
                <span className="text-sm font-medium">#{r.rank}</span>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9" />
                <div>
                  <p className="text-secondary font-semibold text-base md:text-base">{r.name}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{r.email}</p>
                </div>
              </div>
              <div className="text-muted-foreground font-semibold text-base md:text-base">{r.major}</div>
              <div className="text-secondary font-semibold text-base md:text-base md:text-right">{r.coins}</div>
            </div>
          </Card>
        ))}
        <Card className="rounded-xl py-4 text-center text-muted-foreground">...</Card>
      </div>
    </div>
  )
}
