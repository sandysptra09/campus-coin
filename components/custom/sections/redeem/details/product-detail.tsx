"use client";

import type React from "react";
import { CoinBadge } from "../coin-badge";
import { Button } from "@heroui/react";
import { Image } from "@heroui/react";
import { MdPersonOutline, MdDateRange } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export default function ProductDetail() {
  return (
    <section className="grid gap-8 py-10 md:grid-cols-2">
      <Image
        src={"https://img.freepik.com/free-photo/medium-shot-people-learning_23-2149300715.jpg"}
        alt="reward"
        className="w-full h-full object-cover"
        width={1000}
      />

      <div className="flex flex-col justify-between gap-10 my-6">
        <div className="flex flex-col justify-center">
          <h1 className="mb-3 text-lg md:text-2xl font-semibold leading-snug text-pretty">
            101 Softskills Webinar
          </h1>
          <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
            Pelajari pentingnya komunikasi, kerja tim, dan etika profesional dalam dunia kerja modern.
          </p>

          <p className="mt-4 text-base text-muted-foreground">
            Webinar | Online | Professional
          </p>

          <ul className="mt-4 text-base text-muted-foreground">
            <li className="flex gap-3"><MdPersonOutline className="my-auto"/> <span>Speaker: Dr. Amelia Sari</span></li>
            <li className="flex gap-3"><MdDateRange className="my-auto"/> <span>Date: 2025-11-18</span></li>
            <li className="flex gap-3"><IoIosTimer className="my-auto"/> <span>Duration: ~2 hours</span></li>
            <li className="flex gap-3"><IoLocationOutline className="my-auto"/> <span>Google Meet</span></li>
          </ul>

          <div className="mt-4 flex items-center gap-2 text-base">
            <CoinBadge value={30} size={30} />
          </div>
        </div>
        <Button color="primary">Redeem</Button>
      </div>
    </section>
  );
}
