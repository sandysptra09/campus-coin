import React from "react";

import { Button } from "@heroui/react";
import ArrowRightIcon from "@/public/assets/icons/arrow-right-icon";
import Link from "next/link";

type PrimaryButtonProps = {
    children: React.ReactNode;
    href?: string;
    icon?: React.ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg";
};

export default function ReadFullArticleButton({
    children,
    href,
    icon = <ArrowRightIcon />,
    className = "",
    size = "sm",
}: PrimaryButtonProps) {
    const baseClasses =
        "w-fit px-6 text-sm md:text-base text-primary font-medium border-primary hover:bg-primary hover:text-white transition";
    if (href) {
        return (
            <Button
                as={Link}
                href={href}
                variant="bordered"
                radius="full"
                endContent={icon}
                className={`${baseClasses} ${className}`}
                size={size}
            >
                {children}
            </Button>
        );
    }

    return (
        <Button
            variant="bordered"
            radius="full"
            endContent={icon}
            className={`${baseClasses} ${className}`}
            size={size}
        >
            {children}
        </Button>
    );
}
