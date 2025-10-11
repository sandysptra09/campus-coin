"use client";

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

export default function ExchangeInput() {
  // eslint-disable-next-line no-use-before-define
  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log("Selected file:", selectedFile.name);
      // Perform further actions with the selected file, e.g., upload
    }
  };

  const [submitted, setSubmitted] = React.useState(null);

  // eslint-disable-next-line no-use-before-define
  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // eslint-disable-next-line no-use-before-define
    setSubmitted(data as any);
  };

  const certificateTypes = [
    {
      id: 1,
      type: "Organization",
    },
    {
      id: 2,
      type: "Community",
    },
    {
      id: 3,
      type: "Training",
    },
  ];
  return (
    <Form className="w-full mx-auto flex flex-col gap-[36px]" onSubmit={onSubmit}>
      <Input
        isRequired
        label="Certificate Title"
        labelPlacement="outside"
        name="certificate_title"
        placeholder="example: Pelatihan UI/UX, Kepanitiaan LKM, dll."
        type="text"
      />
      <Select isRequired label="Certificate Type" labelPlacement="outside">
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
        defaultValue={parseDate("2024-04-04")}
        endContent={<FaCalendar />}
        label="Date published"
        labelPlacement="outside"
        placeholderValue={new CalendarDate(1995, 11, 6)}
      />
      <DateInput
        isRequired
        defaultValue={parseDate("2024-04-04")}
        endContent={<FaCalendar />}
        label="Valid until"
        labelPlacement="outside"
        placeholderValue={new CalendarDate(1995, 11, 6)}
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
        placeholder="example: IDX0123456"
        type="file"
        onChange={handleFileChange}
        endContent={<FaFolder color="#B3B3B3" />}
      />
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
