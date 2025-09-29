import Link from "next/link";

import { Form } from "@heroui/react";
import TextField from "../input/text-field";
import PasswordField from "../input/password-field";
import { Button } from "@/components/ui/button";


export default function RegisterForm() {
    return (
        <Form className="w-full flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl font-bold">Register</h1>
                <p className="text-muted-foreground text-sm text-balance font-medium ">
                    Use your student ID number and official university email address to create an account.
                </p>
            </div>
            <div className="w-full grid gap-4">
                <TextField name="fullname" label="Full Name" placeholder="Enter your name" type="text" required />
                <TextField name="nim" label="Student ID" placeholder="Enter your student ID" type="number" required />
                <TextField name="university_email" label="University Email" placeholder="Enter your university email" type="email" required />
                <PasswordField name="password" label="Password" placeholder="Enter your password" type="password" required />
                <PasswordField name="confirm_password" label="Confirm Password" placeholder="Confirm your password" type="password" required />
                <Button type="submit" className="font-semibold text-md hover:bg-[#FFE776] active:bg-[#D8BC36]">Create Account</Button>
            </div>
            <p className="justify-center text-sm text-black">
                Already have an account?{" "}
                <Link href="/login" className="text-[#F2D443] hover:underline">
                    Sign in
                </Link>
            </p>
        </Form>
    )
}
