import React from "react";

import { Button, Image, Link } from "@heroui/react";

export default function FinishSection() {
  return (
    <div className="flex flex-col gap-10 mx-10">
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-32">
        <div className="flex flex-col justify-center gap-5 max-w-[540px]">
          <p className="text-lg md:text-xl font-bold">
            Hooray! you just submitted your certification for an exchange.
          </p>
          <p className="text-base md:text-lg">
            Now sit back, relax, and wait until the validator confirm your
            certification for a coin exchange.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Image src={"/images/person-hooray.png"} />
        </div>
      </div>
      <Link href="/exchange">
        <Button color="primary" size="lg" className="text-md w-full">
          OK
        </Button>
      </Link>
    </div>
  );
}
