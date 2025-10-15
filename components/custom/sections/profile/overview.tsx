"use client";

import React from "react";
import { Gift, BookOpen, Calendar } from "lucide-react";
import StatCard from "../../cards/statistic-card";
import ProgressCard from "../../cards/progress-card";
import { Card } from "@heroui/react";

export default function Overview() {
  return (
    <section className="">
      <Card shadow="sm" radius="lg" className="p-6 md:p-8">
        <h3 className="text-base md:text-[25px] font-semibold text-secondary mb-6">
          Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
          <StatCard
            icon={
              <svg
                width={30}
                height={30}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.75 0.25H18.25V2.5H4.75V0.25ZM2.5 4.75V2.5H4.75V4.75H2.5ZM2.5 18.25V4.75H0.25V18.25H2.5ZM4.75 20.5V18.25H2.5V20.5H4.75ZM18.25 20.5V22.75H4.75V20.5H18.25ZM20.5 18.25V20.5H18.25V18.25H20.5ZM20.5 4.75H22.75V18.25H20.5V4.75ZM20.5 4.75V2.5H18.25V4.75H20.5ZM10.375 3.625H12.625V5.875H16V8.125H9.25V10.375H16V17.125H12.625V19.375H10.375V17.125H7V14.875H13.75V12.625H7V5.875H10.375V3.625Z"
                  fill="#F2D443"
                />
              </svg>
            }
            title="Total Coins"
            value="1,240"
          />
          <StatCard
            icon={<Calendar className="w-7 h-7" />}
            title="Events Joined"
            value="8"
          />
          <StatCard
            icon={<BookOpen className="w-7 h-7" />}
            title="Articles"
            value="15"
          />
          <StatCard
            icon={<Gift className="w-7 h-7" />}
            title="Total Rewards"
            value="5"
          />
        </div>
        <ProgressCard value={80} xpText="200 coins left to Silver Level" />
      </Card>
    </section>
  );
}
