"use client";

import { Tabs, Tab } from "@heroui/react";
import DailyLeaderboard from "./daily-leaderboard";
import MonthlyLeaderboard from "./monthly-leaderboard";

export default function LeaderboardTabs() {
  return (
    <Tabs
      aria-label="Options"
      radius="full"
      color="primary"
      variant="bordered"
      className="mx-auto mt-10"
      classNames={{
        tabList: "border-primary border-2 rounded-full", // customize tab list border
        tab: "border-2 border-transparent data-[selected=true]:border-primary", // per-tab border
      }}
    >
      <Tab key="daily" title="Daily">
        <DailyLeaderboard />
      </Tab>
      <Tab key="monthly" title="Monthly">
        <MonthlyLeaderboard />
      </Tab>
    </Tabs>
  );
}
