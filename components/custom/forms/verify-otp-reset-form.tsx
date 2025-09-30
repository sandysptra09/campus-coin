import Link from "next/link";

import { Form } from "@heroui/react";
import { Button } from "@/components/ui/button";
import OtpField from "../inputs/otp-field";

export default function VerifyOtpResetForm() {
    return (
        <Form className="w-full flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl font-bold">Verify Reset Code</h1>
                <p className="text-muted-foreground text-sm text-balance font-medium ">
                    We have sent an OTP code to your university email address. Enter the code below to continue resetting your password.
                </p>
            </div>
            <div className="w-full grid gap-6">
                <OtpField name="otp" placeholder="..." required />
                <Button type="submit" className="font-semibold text-md hover:bg-[#FFE776] active:bg-[#D8BC36]">Verify OTP</Button>
            </div>
            <p className="justify-center text-sm text-black">
                Didn't receive the code?{" "}
                <Link href="/#" className="text-[#F2D443] hover:underline">
                    Resend it.
                </Link>
            </p>
        </Form>
    )
}
