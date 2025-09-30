import { Input } from "@heroui/react";

interface TextFieldProps {
    name: string;
    type: string;
    label: string;
    placeholder?: string;
    required?: boolean;
}

export default function TextField({
    name, type, label, placeholder, required = true
}: TextFieldProps) {
    return (
        <Input
            isRequired={required}
            name={name}
            type={type}
            label={label}
            labelPlacement="outside"
            placeholder={placeholder}
            radius="sm"
            size="md"
            variant="bordered"
            classNames={{
                label: "text-sm font-medium text-[gray-700] mb-1",
                inputWrapper: "border-gray-300 hover:border-gray-400 focus-within:border-[#F2D443]"
            }}
        />
    )
}