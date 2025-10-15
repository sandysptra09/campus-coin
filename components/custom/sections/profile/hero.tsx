"use client";

import React from "react";

import { Card, Avatar } from "@heroui/react";
import ProfileBadge from "../../chips/user-chip";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20">
      <Card
        shadow="sm"
        radius="lg"
        className="p-6 md:p-8 flex flex-col items-center md:items-start justify-between gap-6 md:gap-8"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
          <Avatar
            src="https://i.pravatar.cc/150?img=1"
            size="lg"
            className="border border-default shadow-sm w-20 h-20"
          />
          <div>
            <h2 className="text-xl md:text-[36px] text-secondary font-semibold">
              Welcome back,{" "}
              <span className="text-primary">Ghassan Ariq Muzakki!</span>
            </h2>
            <p className="text-base text-secondary md:text-[21px] font-medium tracking-wide">
              Keep up the spirit to collect coins and level up
            </p>
            <div className="flex justify-center sm:justify-start gap-5 my-8 sm:mt-5">
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-center text-base text-muted-foreground">
                  1.8k
                </p>
                <p className="text-sm">Followers</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-center text-base text-muted-foreground">
                  1
                </p>
                <p className="text-sm">Following</p>
              </div>
            </div>
          </div>
          <div className="md:mt-6 ml-5">
            <ProfileBadge level="Bronze" />
          </div>
        </div>
      </Card>
    </section>
  );
}
