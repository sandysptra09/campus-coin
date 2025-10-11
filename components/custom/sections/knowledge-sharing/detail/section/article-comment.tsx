import React from 'react'

import TotalCommentChip from '../chips/total-comment-chip'
import UserInfoAvatar from '../avatars/user-info-avatar'
import CommentField from '../inputs/comment-field'
import ItemComment from '../comments/item-comment'

export default function ArticleComment() {
    return (
        <section className='mt-10'>
            <div className="flex items-center gap-3">
                <h3 className="text-secondary text-[28px] md:text-[36px] font-semibold leading-none">
                    Comments
                </h3>
                <TotalCommentChip variant="primary">10</TotalCommentChip>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <UserInfoAvatar
                    name="Hercule Poirot"
                    date=""
                    avatarUrl="https://i.pravatar.cc/100?img=11"
                />
                <CommentField placeholder="Share your thoughts..." />
            </div>
            <ItemComment
                name="Alya Mikhailovna"
                date="November 25, 2025"
                avatarUrl="https://i.pravatar.cc/100?img=5"
                content="Nascetur dui id mollis vivamus viverra aenean semper, molestie conubia faucibus posuere sollicitudin ullamcorper et, nisi ac himenaeos lacinia cum mus."
                likes={12}
                repliesCount={4}
            />
        </section>
    )
}
