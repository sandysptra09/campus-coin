import { LeaderboardTableProps } from "@/interfaces/leaderboard-table";
import { AlarmClock } from "lucide-react";
import { IoTrophy } from "react-icons/io5";

function PodiumColumn({
  place,
  name,
  coins,
  rank,
  major,
  height = "h-56",
}: {
  place: "left" | "center" | "right";
  name: string;
  coins: string;
  rank: number;
  major: string;
  height?: string;
}) {
  const isCenter = place === "center";
  const pedestalClasses = "rounded-t-md bg-gradient-to-b from-muted to-card w-full " + height;

  return (
    <div className={`flex w-full flex-col items-center mt-28 ${(rank === 1) ? '-translate-y-20' : ''}`}>
      <div className="rounded-md border bg-card p-2">
        <div className="h-24 w-24 bg-muted rounded-md" aria-hidden />
      </div>
      <p className="mt-3 font-semibold">{name}</p>
      <p className="text-sm">{major}</p>
      <div className="w-full max-w-[220px]">
        <div className=" w-full flex justify-center">
          <div className="flex flex-col gap-2 translate-y-14">
            <div className="flex flex-col mx-auto justify-center w-fit items-center gap-1 rounded-md bg-brand px-2 py-1 text-xs text-brand-foreground shadow-sm">
              <IoTrophy size={35} className={
                rank == 1 ? 'text-primary' :
                rank == 2 ? 'text-[#b7b7b7]' :
                rank == 3 ? 'text-[#D39324]' : 'text-white'
              }/>
            </div>
            <p className="font-semibold">{coins} coins</p>
          </div>
        </div>
        <div className={pedestalClasses} />
      </div>
    </div>
  );
}

export function Podium({ items }: LeaderboardTableProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {items.map((e, index) => (
          <PodiumColumn
            key={index}
            place="left"
            name={e.name}
            rank={e.rank}
            major={e.major}
            coins={e.coins.toString()}
            height="h-44"
          />
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
        <AlarmClock size={14} aria-hidden />
        <span>Ends in</span>
        <span className="font-medium">10d 23h 59m 29s</span>
      </div>
    </div>
  );
}
