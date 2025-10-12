import { ExchangeInputProps } from "@/interfaces/exchange";
import {
  Button,
  DateInput,
  Form,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import React from "react";
import { FaCalendar, FaFolder } from "react-icons/fa6";

export default function CertificateDataSection({
  setSection,
  setFormData,
  setCertificatePreviewURL,
}: ExchangeInputProps) {
  
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setCertificatePreviewURL(URL.createObjectURL(selectedFile))
    }
  };

  const [submitted, setSubmitted] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const requiredFields = [
      "certificate_title",
      "certificate_type",
      "publisher",
      "certificate_id",
      "certificate_file",
    ];

    const missing = requiredFields.filter((field) => !data[field]);
    if (missing.length > 0) {
      setError("Please fill out all required fields.");
      return;
    }

    setError(null);
    setSubmitted(data);
    setFormData(data);
    setSection(1);
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const certificateTypes = [
    { id: 1, type: "Organization" },
    { id: 2, type: "Community" },
    { id: 3, type: "Training" },
  ];

  return (
    <Form
      className="w-full mx-auto flex flex-col gap-[36px]"
      onSubmit={onSubmit}
    >
      <Input
        isRequired
        label="Certificate Title"
        labelPlacement="outside"
        name="certificate_title"
        placeholder="example: Pelatihan UI/UX, Kepanitiaan LKM, dll."
        type="text"
      />

      <Select
        isRequired
        label="Certificate Type"
        labelPlacement="outside"
        name="certificate_type"
      >
        {certificateTypes.map((item) => (
          <SelectItem key={item.id}>{item.type}</SelectItem>
        ))}
      </Select>

      <Input
        isRequired
        label="Publisher"
        labelPlacement="outside"
        name="publisher"
        placeholder="example: Kampus, Lembaga, dll."
        type="text"
      />

      <DateInput
        isRequired
        defaultValue={parseDate("2000-01-01")}
        endContent={<FaCalendar />}
        label="Date published"
        labelPlacement="outside"
        name="date_published"
        placeholderValue={new CalendarDate(2000, 1, 1)}
      />

      <DateInput
        isRequired
        defaultValue={parseDate("2000-01-01")}
        endContent={<FaCalendar />}
        label="Valid until"
        labelPlacement="outside"
        name="valid_until"
        placeholderValue={new CalendarDate(2000, 1, 1)}
      />

      <Input
        isRequired
        label="Certificate ID/Number"
        labelPlacement="outside"
        name="certificate_id"
        placeholder="example: IDX0123456"
        type="text"
      />

      <Input
        isRequired
        label="File Attachment"
        labelPlacement="outside"
        name="certificate_file"
        type="file"
        onChange={handleFileChange}
        endContent={<FaFolder color="#B3B3B3" />}
      />

      {error && <div className="text-small text-danger-500">{error}</div>}

      {submitted && (
        <div className="text-small text-default-500">
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}

      <div className="flex w-full justify-end">
        <Button color="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
}
