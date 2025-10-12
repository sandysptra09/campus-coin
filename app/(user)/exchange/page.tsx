"use client";

import FAQ from "@/components/custom/sections/exchange/faq";
import { Button, Image } from "@heroui/react";
import Link from "next/link";
import React from "react";

export default function ExchangePage() {
  return (
    <div className="flex flex-col mt-[50px] lg:mt-[153px] px-[25px] lg:px-[102px]">
      <div className="flex flex-col-reverse mx-auto lg:flex-row lg:justify-between mb-[40px] lg:mb-[180px]">
        <div className="flex flex-col gap-[45px] lg:gap-[36px] max-w-[543px]">
          <p className="text-xl lg:text-3xl text-center lg:text-start font-semibold">Exchange your certifications for a better future</p>
          <p className="text-base lg:text-lg font-medium">
            Do you have certification from events, community, organizations, or even your
            campus program? Turn them into coins and obtain exclusive item at
            CampusCoin to support your uni journey.
          </p>
          <Link href="/exchange/form">
            <Button color="primary" size="md" className="text-md w-full" >Exchange Now</Button>
          </Link>
        </div>
        <div className="flex justify-center">
        <Image src={'/images/certificate.png'} width={500} alt={"certificate"} />
        </div>
      </div>
      <FAQ />
    </div>
  );
}
