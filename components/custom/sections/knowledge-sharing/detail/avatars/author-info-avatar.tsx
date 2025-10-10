import React from 'react'

import { Avatar } from '@heroui/react'

type AuthorInfoAvatarProps = {
    name: string;
    date: string;
    avatarUrl: string;
}

export default function AuthorInfoAvatar({
    name,
    date,
    avatarUrl = 'https://i.pravatar.cc/100?img=3'
}: AuthorInfoAvatarProps) {
    return (
        <div className="flex items-center gap-3 mt-6 mb-4">
            <Avatar
                src={avatarUrl}
                alt={name}
                size="md"
                className="border border-divider"
            />
            <div className="flex flex-col leading-tight">
                <h6 className="text-secondary font-semibold text-base md:text-base">
                    {name}
                </h6>
                <span className="text-secondary/70 text-xs md:text-sm">{date}</span>
            </div>
        </div>
    )
}
