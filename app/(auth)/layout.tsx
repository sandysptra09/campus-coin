import React from "react";
import CampusCoinLogo from "@/components/custom/logo/campus-coin-logo";
import CampusCoinBanner from "@/components/custom/banners/campus-coin-banner";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <CampusCoinLogo size={200} />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {children}
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <CampusCoinBanner size={600} />
      </div>
    </div>
  )
}