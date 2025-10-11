import LeaderboardTabs from "@/components/custom/sections/leaderboard/leaderboard-tabs";
import UserScoreCard from "@/components/custom/sections/leaderboard/user-score-card";
import React from "react";

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col mt-[50px] px-[25px] lg:px-[102px]">
      <div className="flex flex-col gap-5">
        <p className="text-xl font-semibold">My Rank</p>
        <UserScoreCard />
        <LeaderboardTabs />
      </div>
    </div>
  );
}
