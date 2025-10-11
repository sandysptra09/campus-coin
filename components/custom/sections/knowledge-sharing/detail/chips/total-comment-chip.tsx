import React from 'react';

import { Chip } from '@heroui/react';

type TotalCommentChipProps = {
    variant?: 'primary' | 'secondary';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    icon?: React.ReactNode;
    children: React.ReactNode;
};

export default function TotalCommentChip({
    variant = 'primary',
    radius = 'full',
    icon,
    children,
}: TotalCommentChipProps) {
    const styles = {
        primary: {
            base: 'text-white text-[22px] font-medium bg-primary',
        },
        secondary: {
            base: 'bg-white text-secondary text-base font-medium px-4 py-1 border-none',
        },
    };

    return (
        <Chip
            variant="flat"
            size='lg'
            radius={radius}
            classNames={styles[variant]}
            startContent={icon}
        >
            {children}
        </Chip>
    );
}
