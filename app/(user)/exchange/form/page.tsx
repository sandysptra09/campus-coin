import ExchangeInput from "@/components/custom/sections/exchange/input";
import RowSteps from "@/components/custom/stepper/stepper";
import React from "react";

export default function ExchangeStepsPage() {
  return (
    <div className="flex justify-center py-[101px]">
      <div className="flex flex-col gap-[111px]">
        <RowSteps
          defaultStep={0}
          color="primary"
          steps={[
            {
              title: "Certificate Data",
            },
            {
              title: "Confirmation",
            },
            {
              title: "Finish",
            },
          ]}
        />
        <ExchangeInput />
      </div>
    </div>
  );
}
