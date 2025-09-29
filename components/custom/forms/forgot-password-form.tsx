import Link from "next/link";

import { Form } from "@heroui/react";
import TextField from "../inputs/text-field";
import { Button } from "@/components/ui/button";

export default function ForgetPasswordForm() {
    return (
        <Form className="w-full flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl font-bold">Forget Password</h1>
                <p className="text-muted-foreground text-sm text-balance font-medium ">
                    Enter your university email address to reset your password.
                </p>
            </div>
            <div className="w-full grid gap-6">
                <TextField name="university_email" label="University Email" placeholder="Enter your university email" type="email" required />
                <Button type="submit" className="font-semibold text-md hover:bg-[#FFE776] active:bg-[#D8BC36]">Send Reset Code</Button>
            </div>
            <p className="justify-center text-sm text-black">
                Remember Password?{" "}
                <Link href="/login" className="text-[#F2D443] hover:underline">
                    Sign in
                </Link>
            </p>
        </Form>
    )
}
