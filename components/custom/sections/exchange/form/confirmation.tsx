"use client";

import React from "react";
import { Button, Card, CardBody, CardHeader, Image } from "@heroui/react";

interface ExchangeConfirmProps {
  formData: Record<string, any>;
  setSection: (val: number) => void;
  previewUrl: string | null;
}

export default function ConfirmationSection({
  formData,
  setSection,
  previewUrl,
}: ExchangeConfirmProps) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-lg text-center mb-10 text-muted-foreground">
        Please make sure all the data inputted are correct.
      </p>

      <Card
        shadow="sm"
        className="w-full max-w-lg rounded-2xl border bg-card p-8"
      >
        <CardHeader>
          <Image src={previewUrl || "/images/no-image.png"} width={1000} />
        </CardHeader>
        <CardBody className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">Certificate Title</p>
            <p className="text-base font-semibold text-foreground">
              {formData.certificate_title || "-"}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">Certificate Type</p>
            <p className="text-base font-semibold text-foreground">
              {formData.certificate_type || "-"}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">Publisher</p>
            <p className="text-base font-semibold text-foreground">
              {formData.publisher || "-"}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">Date Published</p>
            <p className="text-base font-semibold text-foreground">
              {formData.date_published || "-"}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">Valid Until</p>
            <p className="text-base font-semibold text-foreground">
              {formData.valid_until || "-"}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              Certificate ID/Number
            </p>
            <p className="text-base font-semibold text-foreground">
              {formData.certificate_id || "-"}
            </p>
          </div>
        </CardBody>
      </Card>

      <div className="flex gap-4 mt-10">
        <Button variant="flat" onPress={() => setSection(0)}>
          Back
        </Button>
        <Button color="primary" onPress={() => setSection(2)}>Confirm</Button>
      </div>
    </div>
  );
}
