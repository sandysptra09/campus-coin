import React from 'react'

import { Card, CardBody, CardFooter, Image, Tooltip } from '@heroui/react'
import EventTypeChip from '@/components/custom/chips/event-type-chip'
import LocationIcon from '@/public/assets/icons/location-icon'
import CoinIcon from '@/public/assets/icons/coin-icon'
import ViewDetailButton from '../buttons/view-detail-button'

export default function EventCard() {
    return (
        <Card
            shadow="sm"
            radius="lg">
            <Image
                src="https://via.placeholder.com/400x200"
                alt="Event Banner"
                className="object-cover w-full h-[180px]"
            />
            <CardBody className='p-4 space-y-3'>
                <div className="flex justify-between">
                    <p className="font-semibold text-md text-secondary md:text-[25px]">Title of Event</p>
                    <EventTypeChip>Event Type</EventTypeChip>
                </div>
                <p className="text-sm text-secondary font-medium">
                    21 Sept 2025 | 09:00 WIB
                </p>
                <div className="flex items-center gap-3 text-sm text-secondary font-medium">
                    <Tooltip content="Location">
                        <span className="flex items-center gap-1">
                            <LocationIcon />
                            Location Name
                        </span>
                    </Tooltip>

                    <Tooltip content="Total Coins">
                        <span className="flex items-center gap-1">
                            <CoinIcon />
                            Total Coins
                        </span>
                    </Tooltip>
                </div>
            </CardBody>
            <CardFooter className="flex justify-end p-4 pt-0">
                <ViewDetailButton />
            </CardFooter>
        </Card>
    )
}
