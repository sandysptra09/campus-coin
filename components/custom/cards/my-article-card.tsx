import React from 'react';

import { Card, CardBody, Image } from '@heroui/react';
import { Eye, Heart, MessageCircle } from 'lucide-react';

interface MyArticleCardProps {
    title: string;
    image: string;
    views: number;
    likes: number;
    comments: number;
}

export default function MyArticleCard({ title, image, views, likes, comments,
}: MyArticleCardProps) {
    return (
        <Card
            shadow='sm'
            radius='lg'
            className='w-full'
        >
            <CardBody className='p-4 flex flex-col md:flex-row items-start gap-4'>
                <div className='w-full md:w-auto'>
                    <Image
                        alt={title}
                        src={image}
                        width='100%'
                        height={100}
                        shadow='md'
                        className='object-cover'
                    />
                </div>
                <div className='flex flex-col flex-1 text-center md:text-left'>
                    <div className='flex flex-col gap-2 md:gap-0'>
                        <h4 className='font-semibold text-secondary text-base mb-1'>
                            {title}
                        </h4>

                        <div className='flex justify-center md:justify-start items-center gap-4 text-sm text-secondary mb-2'>
                            <span className='flex items-center gap-1'>
                                <Eye className='w-4 h-4' /> {views}
                            </span>
                            <span className='flex items-center gap-1'>
                                <Heart className='w-4 h-4' /> {likes}
                            </span>
                            <span className='flex items-center gap-1'>
                                <MessageCircle className='w-4 h-4' /> {comments}
                            </span>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
