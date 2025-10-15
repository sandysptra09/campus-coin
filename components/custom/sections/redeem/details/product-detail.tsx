"use client";

import type React from "react";
import { CoinBadge } from "../coin-badge";
import { Button } from "@heroui/react";
import { Image } from "@heroui/react";
import { MdPersonOutline, MdDateRange } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import redeemItemsAll from "@/data/redeem-items-all.json";

export default function ProductDetail(props: { id: string }) {
  const item = redeemItemsAll.filter((e) => e.id == parseInt(props.id))[0];

  console.log(item);

  return (
    <section className="grid gap-8 py-10 md:grid-cols-2">
      <Image
        src={item.image}
        alt="reward"
        className="w-full h-full object-cover"
        width={1000}
      />

      <div className="flex flex-col justify-between gap-10 my-6">
        <div className="flex flex-col justify-center">
          <h1 className="mb-3 text-lg md:text-2xl font-semibold leading-snug text-pretty">
            {item.title}
          </h1>
          <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
            {item.description}
          </p>

          <p className="mt-4 text-base text-muted-foreground">{item.meta}</p>

          <ul className="mt-4 text-base text-muted-foreground">
            {item.speaker ? (
              <li className="flex gap-3">
                <MdPersonOutline className="my-auto" />{" "}
                <span>{item.speaker}</span>
              </li>
            ) : (
              <></>
            )}
            {item.date ? (
              <li className="flex gap-3">
                <MdDateRange className="my-auto" />{" "}
                <span>{item.date}</span>
              </li>
            ) : (
              <></>
            )}
            {item.duration ? (
              <li className="flex gap-3">
                <IoIosTimer className="my-auto" />{" "}
                <span>{item.duration}</span>
              </li>
            ) : (
              <></>
            )}
            {item.location ? (
              <li className="flex gap-3">
                <IoLocationOutline className="my-auto" />{" "}
                <span>{item.location}</span>
              </li>
            ) : (
              <></>
            )}
          </ul>

          <div className="mt-4 flex items-center gap-2 text-base">
            <CoinBadge value={item.coins} size={30} />
          </div>
        </div>
        <Button color="primary">Redeem</Button>
      </div>
    </section>
  );
}
