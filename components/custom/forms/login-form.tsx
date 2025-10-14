"use client";

import Link from "next/link";

import { Form } from "@heroui/react";
import TextField from "../inputs/text-field";
import PasswordField from "../inputs/password-field";
import { Button } from "@/components/ui/button";
import { useSession } from "@/app/providers";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { login } = useSession();
  const router = useRouter();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleLogin = async (e: any) => {
    e.preventDefault();

    login();

    router.push("/");
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return (
    <Form className="w-full flex flex-col gap-6" onSubmit={handleLogin}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-xl font-bold">Login</h1>
        <p className="text-muted-foreground text-sm text-balance font-medium ">
          Enter your student ID number and password to access your account.
        </p>
      </div>
      <div className="w-full grid gap-6">
        <TextField
          name="university_email"
          label="University Email"
          placeholder="Enter your university email"
          type="email"
          required
        />
        <PasswordField
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          required
        />
        <p className="text-center text-sm text-black">
          Forgot Password?{" "}
          <Link
            href="/login/forgot-password"
            className="text-[#F2D443] hover:underline"
          >
            Click Here
          </Link>
        </p>
        <Button
          type="submit"
          className="cursor-pointer font-semibold text-md hover:bg-[#FFE776] active:bg-[#D8BC36]"
        >
          Login
        </Button>
      </div>
      <p className="mx-auto text-sm text-black">
        Don’t have an account?{" "}
        <Link href="/register" className="text-[#F2D443] hover:underline">
          Sign up
        </Link>
      </p>
    </Form>
  );
}
