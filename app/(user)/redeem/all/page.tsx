"use client";

import RewardsCarousel from "@/components/custom/carousels/reward-carousel";
import SearchRedeemField from "@/components/custom/inputs/search-redeem-field";
import { Button } from "@heroui/react";
import React from "react";
import { MdOutlineTune } from "react-icons/md";

import redeemItemsEvent from "@/data/redeem-items-webinar.json"
import redeemItemsWorkshop from "@/data/redeem-items-workshop.json"
import redeemItemsCertification from "@/data/redeem-items-certificate.json"

export default function AllRedeemProductPage() {
  return (
    <div className="flex flex-col gap-[100px] py-[50px] px-[25px] lg:px-[102px]">
      <div className="w-full flex justify-end gap-2 ">
        <Button className="my-auto bg-[#eeeeee] text-[#575757]" isIconOnly>
          <MdOutlineTune size={25} />
        </Button>
        <SearchRedeemField />
      </div>
      <RewardsCarousel title="Event" item={redeemItemsEvent} />
      <RewardsCarousel title="Workshop" item={redeemItemsWorkshop} />
      <RewardsCarousel title="Certifications" item={redeemItemsCertification} />
    </div>
  );
}
