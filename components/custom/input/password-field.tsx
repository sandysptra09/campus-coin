import { useState } from "react";
import { Input } from "@heroui/react";
import { EyeSlashFilledIcon, EyeFilledIcon } from "@/public/assets/icons/password-icons";

interface PasswordFieldProps {
    name: string;
    type: string;
    label: string;
    placeholder?: string;
    required?: boolean;
}

export default function PasswordField({
    name, type = "password", label, placeholder, required = true
}: PasswordFieldProps) {

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <Input
            isRequired={required}
            endContent={
                <button
                    aria-label="toggle password visibility"
                    className="focus:outline-solid outline-transparent"
                    type="button"
                    onClick={toggleVisibility}
                >
                    {isVisible ? (
                        <EyeSlashFilledIcon className="text-[20px] text-default-400 pointer-events-none" />
                    ) : (
                        <EyeFilledIcon className="text-[20px] text-default-400 pointer-events-none" />
                    )}
                </button>
            }
            name={name}
            type={isVisible ? "text" : type}
            label={label}
            labelPlacement="outside"
            placeholder={placeholder}
            radius="sm"
            size="md"
            variant="bordered"
            classNames={{
                label: "text-sm font-medium text-gray-700 mb-1",
                inputWrapper: "border-gray-300 hover:border-gray-400 focus-within:border-[#F2D443]"
            }}
        />
    )
}