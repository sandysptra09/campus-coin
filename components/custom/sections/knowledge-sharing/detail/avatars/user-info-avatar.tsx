import React from 'react'

import { Avatar } from '@heroui/react'

type UserInfoAvatarProps = {
    name: string;
    avatarUrl: string;
}

export default function UserInfoAvatar({
    name,
    avatarUrl = 'https://i.pravatar.cc/100?img=3'
}: UserInfoAvatarProps) {
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
            </div>
        </div>
    )
}
