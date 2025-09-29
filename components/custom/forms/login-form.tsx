import Link from "next/link";

import { Form } from "@heroui/react";
import TextField from "../input/text-field";
import PasswordField from "../input/password-field";
import { Button } from "@/components/ui/button";


export default function LoginForm() {
    return (
        <Form className="w-full flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl font-bold">Login</h1>
                <p className="text-muted-foreground text-sm text-balance font-medium ">
                    Enter your student ID number and password to access your account.
                </p>
            </div>
            <div className="w-full grid gap-6">
                <TextField name="university_email" label="University Email" placeholder="Enter your university email" type="email" required />
                <PasswordField name="password" label="Password" placeholder="Enter your password" type="password" required />
                <Button type="submit" className="font-semibold text-md hover:bg-[#FFE776] active:bg-[#D8BC36]">Login</Button>
            </div>
            <p className="justify-center text-sm text-black">
                Don’t have an account?{" "}
                <Link href="/register" className="text-[#F2D443] hover:underline">
                    Sign up
                </Link>
            </p>
        </Form>
    )
}
