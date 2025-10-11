"use client";

import { Avatar, Card, CardBody, Chip, Progress } from "@heroui/react";
import { Image } from "@heroui/react";
import React from "react";

export default function UserScoreCard() {
  return (
    <Card shadow="sm" radius="lg" className="max-w-[350px]">
      <CardBody className="flex flex-row justify-between gap-2 p-4 space-y-3">
        <Avatar size="lg" name="田中" className="my-auto" />
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <p className="font-bold">#57</p>
            <div className="flex flex-col">
              <p className="text-base font-semibold">John Doe</p>
              <p className="text-sm">johndoe@ace.id</p>
            </div>
            <Chip radius="full" color="primary">
              You're here
            </Chip>
          </div>
          <div className="flex flex-col gap-2">
            <Progress
              classNames={{
                track: "bg-[rgba(255,205,15,0.25)]",
                indicator: "bg-[#3BB2F1]",
              }}
              value={50}
            />
            <p className="text-sm">200 more coins to reach the top 10</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
