import React, { useState } from 'react'

import { Heart, MessageCircle } from 'lucide-react'
import { Button, Badge } from '@heroui/react'
import AuthorInfoAvatar from '../avatars/author-info-avatar'

type ItemCommentProps = {
    name: string
    date: string
    avatarUrl: string
    content: string
    likes: number
    repliesCount?: number
}

export default function ItemComment({
    name,
    date,
    avatarUrl,
    content,
    likes,
    repliesCount = 0,
}: ItemCommentProps) {
    const [isLiked, setIsLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(likes)
    const [showReplies, setShowReplies] = useState(false)

    const handleLikeToggle = () => {
        if (isLiked) {
            setLikeCount(likeCount - 1)
        } else {
            setLikeCount(likeCount + 1)
        }
        setIsLiked(!isLiked)
    }

    const handleRepliesToggle = () => {
        setShowReplies(!showReplies)
    }

    return (
        <div className="flex flex-col gap-2 mb-8 mt-8">
            <AuthorInfoAvatar name={name} date={date} avatarUrl={avatarUrl} />
            <p className="text-secondary/90 text-sm md:text-base leading-relaxed">
                {content}
            </p>

            <div className="flex items-center gap-4 mt-2">
                <Button
                    disableRipple
                    size="sm"
                    variant="light"
                    radius="full"
                    onPress={handleLikeToggle}
                    className={`flex text-sm md:text-base !bg-transparent hover:!bg-transparent focus:!bg-transparent 
                        active:!bg-transparent transition-colors ${isLiked ? 'text-red-500' : 'text-secondary/70'
                        }`}
                    startContent={
                        <Heart
                            className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''
                                }`}
                        />
                    }
                >
                    {likeCount}
                </Button>
                {repliesCount > 0 && (
                    <Button
                        disableRipple
                        size="sm"
                        variant="light"
                        radius="full"
                        onPress={handleRepliesToggle}
                        className="flex text-sm md:text-base text-secondary/70 hover:text-primary !bg-transparent 
                        hover:!bg-transparent focus:!bg-transparent active:!bg-transparent transition-colors"
                        startContent={<MessageCircle className="w-5 h-5" />}
                    >
                        {showReplies
                            ? 'Hide replies'
                            : `View ${repliesCount} ${repliesCount > 1 ? 'replies' : 'reply'}`}
                    </Button>
                )}
                <Button
                    disableRipple
                    size="sm"
                    variant="light"
                    radius="full"
                    className="font-medium text-sm md:text-base text-secondary/80 hover:text-primary hover:underline 
                    !bg-transparent hover:!bg-transparent focus:!bg-transparent active:!bg-transparent"
                >
                    Reply
                </Button>
            </div>
        </div>
    )
}
