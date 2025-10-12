"use client";

import { useState } from "react";

import RowSteps from "@/components/custom/stepper/stepper";
import React from "react";
import CertificateDataSection from "@/components/custom/sections/exchange/form/certificate-data";
import ConfirmationSection from "@/components/custom/sections/exchange/form/confirmation";
import FinishSection from "@/components/custom/sections/exchange/form/finish";

export default function ExchangeStepsPage() {
  const [section, setSection] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return (
    <div className="flex justify-center py-[60px]">
      <div className="flex flex-col gap-[80px]">
        <RowSteps
          defaultStep={0}
          currentStep={section}
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
        {section == 0 ? (
          <CertificateDataSection
            setSection={setSection}
            setFormData={setFormData}
            section={section}
            setCertificatePreviewURL={setPreviewUrl}
          />
        ) : section == 1 ? (
          <ConfirmationSection
            formData={formData}
            setSection={setSection}
            previewUrl={previewUrl}
          />
        ) : section == 2 ? (
          <FinishSection />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
