import React from "react";

import { Button, Link } from "@heroui/react";
import ArrowRightIcon from "@/public/assets/icons/arrow-right-icon";

export default function ViewDetailButton() {
    return (
        <Button
            as={Link}
            radius="full"
            size="sm"
            endContent={<ArrowRightIcon />}
            variant="bordered"
            className="border-gray-600 text-secondary font-medium hover:bg-gray-100 transition"
        >
            View Details
        </Button>
    );
}
