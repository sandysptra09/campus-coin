import React from 'react';

import { Chip } from '@heroui/react';

type TopPickChipProps = {
    variant?: 'primary' | 'secondary';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    icon?: React.ReactNode;
    children: React.ReactNode;
};

export default function TopPickChip({
    variant = 'primary',
    radius = 'full',
    icon,
    children,
}: TopPickChipProps) {
    const styles = {
        primary: {
            base: 'border border-primary text-primary text-base font-medium px-4 py-1 bg-transparent',
        },
        secondary: {
            base: 'bg-white text-secondary text-base font-medium px-4 py-1 border-none',
        },
    };

    return (
        <Chip
            variant="flat"
            radius={radius}
            classNames={styles[variant]}
            startContent={icon}
        >
            {children}
        </Chip>
    );
}
