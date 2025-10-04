import { Input } from "@heroui/react";

interface NumberFieldProps {
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
}

export default function NumberField({
    name,
    label,
    placeholder,
    required = true
}: NumberFieldProps) {
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    };

    return (
        <Input
            isRequired={required}
            name={name}
            type="text"
            inputMode="numeric"
            label={label}
            labelPlacement="outside"
            placeholder={placeholder}
            radius="sm"
            size="md"
            variant="bordered"
            onInput={handleInput}
            classNames={{
                label: "text-sm font-medium text-[gray-700] mb-1",
                inputWrapper:
                    "border-gray-300 hover:border-gray-400 focus-within:border-[#F2D443]"
            }}
        />
    );
}
