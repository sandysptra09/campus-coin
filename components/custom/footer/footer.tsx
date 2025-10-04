import React from "react";
import CampusCoinLogo from "../logo/campus-coin-logo";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import Link from "next/link";

export default function CampusCoinFooter() {
  return (
    <footer className="w-full bg-white px-6 md:px-12 lg:px-[134px] py-[80px] text-sm lg:text-base">
      <div className="flex flex-col gap-[22px]">
        <div className="flex flex-col sm:flex-row gap-12 justify-between lg:gap-5">
          <div className="flex flex-col gap-[21px] max-w-[300px] lg:max-w-[428px]">
            <CampusCoinLogo size={286} />
            <div>
              CampusCoin is a digital reward system designed to make your campus
              journey more exciting. Earn coins by joining events, contributing
              to the community, and redeem them for exclusive rewards.
            </div>
            <div className="flex gap-3">
              <div className="inline-flex gap-[8px]">
                <FaLocationDot className="my-auto" />
                <p>Bandung, Indonesia</p>
              </div>
              <div className="inline-flex gap-[8px]">
                <FaPhone className="my-auto" />
                <p>+62 817-0918-2025</p>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-3 grid-rows-6 max-w-[660px] space-x-5">
            <p className="font-semibold">About</p>
            <p className="font-semibold">Program</p>
            <p className="font-semibold">Support / Legal</p>
            <div></div>
            <Link href={"/events"}>Events</Link>
            <Link href={"/faq"}>FAQ</Link>
            <div></div>
            <Link href={"/redeem"}>Redeem Store</Link>
            <Link href={"/terms"}>Terms & Condition</Link>
            <div></div>
            <Link href={"/forum"}>Knowledge Sharing</Link>
            <Link href={"/privacy"}>Privacy</Link>
          </div>
        </div>
        <hr />
        <div className="w-full flex justify-between">
            <p>© 2025 CampusCoin. All Rights Reserved</p>
            <div className="inline-flex gap-3">
                <Link href={"/terms"}>Terms</Link>
                <Link href={"/privacy"}>Privacy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
