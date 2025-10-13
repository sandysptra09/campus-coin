"use client";

import RewardsCarousel from "@/components/custom/carousels/reward-carousel";
import SearchRedeemField from "@/components/custom/inputs/search-redeem-field";
import { Button } from "@heroui/react";
import React from "react";
import { MdOutlineTune } from "react-icons/md";

const redeemItems = [
  {
    id: 1,
    title: "IxDF UI/UX Workshop",
    meta: "Workshop | Online | Professional",
    coins: 25,
  },
  {
    id: 2,
    title: "101 Softskills Webinar",
    meta: "Webinar | Online | Professional",
    coins: 20,
  },
  {
    id: 3,
    title: "Coursera Subscription Discount",
    meta: "Certification | Professional",
    coins: 75,
  },
  {
    id: 4,
    title: "Microsoft Certificate Discount",
    meta: "Certification | Professional",
    coins: 100,
  },
  {
    id: 5,
    title: "IBM Certificate Discount",
    meta: "Certification | Professional",
    coins: 250,
  },
];

export default function AllRedeemProductPage() {
  return (
    <div className="flex flex-col gap-[100px] py-[50px] px-[25px] lg:px-[102px]">
      <div className="w-full flex justify-end gap-2 ">
        <Button className="my-auto bg-[#eeeeee] text-[#575757]" isIconOnly>
          <MdOutlineTune size={25} />
        </Button>
        <SearchRedeemField />
      </div>
      <RewardsCarousel title="Event" item={redeemItems} />
      <RewardsCarousel title="Course" item={redeemItems} />
      <RewardsCarousel title="Certifications" item={redeemItems} />
    </div>
  );
}
