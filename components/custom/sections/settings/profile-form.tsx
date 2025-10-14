"use client";

import * as React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Button,
  Image,
} from "@heroui/react";

export function ProfileForm() {
  const [fullName, setFullName] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  const [nim, setNim] = React.useState("");
  const [university, setUniversity] = React.useState("");
  const [major, setMajor] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [userImage, setUserImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    setFullName("Ghassan Ariq Muzakki");
    setDisplayName("malixa_ken");
    setNim("123456789");
    setUniversity("Universitas Pendidikan Indonesia");
    setMajor("S1 Rekayasa Perangkat Lunak");
    setEmail("ghasan@upi.edu");
    setUserImage("https://i.pravatar.cc/150?img=1");
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Card className="p-5">
      <form onSubmit={onSubmit} className="space-y-0">
        <CardBody className="grid gap-4">
          <div className="flex justify-center w-full">
            <Image
              src={userImage!}
              alt={fullName}
              width={250}
              height={250}
              radius="full"
              className="object-cover border-2 border-gray-200 my-7"
            />
          </div>
          <Input
            id="fullName"
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
          />

          <Input
            id="displayName"
            label="Display name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Your name as visible to others"
          />

          <Input
            id="nim"
            label="NIM"
            value={nim}
            onChange={(e) => setNim(e.target.value)}
            placeholder=""
          />

          <Input
            id="university"
            label="University"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            placeholder="e.g., State University"
          />

          <Input
            id="major"
            label="Major"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            placeholder="e.g., Computer Science"
          />

          <div className="grid gap-2">
            <Input id="email" label="Email" value={email} isDisabled />
            <p className="text-sm text-muted-foreground">
              Email is managed by your campus and cannot be changed here.
            </p>
          </div>
        </CardBody>
        <CardFooter className="justify-end">
          <Button color="primary" type="submit">
            Save changes
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
