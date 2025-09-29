import { Form } from "@heroui/react";
import PasswordField from "../inputs/password-field";
import { Button } from "@/components/ui/button";


export default function ResetPasswordForm() {
    return (
        <Form className="w-full flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl font-bold">Reset Your Password</h1>
                <p className="text-muted-foreground text-sm text-balance font-medium ">
                    Enter your new password and confirm it.
                </p>
            </div>
            <div className="w-full grid gap-4">
                <PasswordField name="newpassword" label="Password" placeholder="Enter your new password" type="password" required />
                <PasswordField name="confirm_new_password" label="Confirm Password" placeholder="Confirm your new password" type="password" required />
                <Button type="submit" className="font-semibold text-md hover:bg-[#FFE776] active:bg-[#D8BC36]">Reset Password</Button>
            </div>
        </Form>
    )
}
