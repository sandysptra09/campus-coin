import React from 'react'

import { Card, CardBody, CardFooter, Image, Tooltip } from '@heroui/react'
import EventTypeChip from '@/components/custom/chips/event-type-chip'
import LocationIcon from '@/public/assets/icons/location-icon'
import CoinIcon from '@/public/assets/icons/coin-icon'
import ViewDetailButton from '../buttons/view-detail-button'

interface EventCardProps {
    event: {
        id: string
        nama_event: string
        gambar: string
        tipe_event: string
        tanggal_mulai_event: string
        jam: string
        lokasi: string
        detail_lokasi: string
        total_koin: number
    }
}

export default function EventCard({ event }: EventCardProps) {
    return (
        <Card
            shadow="sm"
            radius="lg">
            <Image
                src={event.gambar}
                alt={event.nama_event}
                width={'100%'}
                className="object-cover w-full h-[180px]"
            />
            <CardBody className='p-4 space-y-3'>
                <div className="flex justify-between">
                    <p className="font-semibold text-md text-secondary md:text-[25px]">{event.nama_event}</p>
                    <EventTypeChip>{event.tipe_event}</EventTypeChip>
                </div>
                <p className="text-sm text-secondary font-medium">
                    {event.tanggal_mulai_event} | {event.jam}
                </p>
                <div className="flex items-center gap-3 text-sm text-secondary font-medium">
                    <Tooltip content="Location">
                        <span className="flex items-center gap-1 capitalize">
                            <LocationIcon />
                            {event.detail_lokasi}
                        </span>
                    </Tooltip>

                    <Tooltip content="Total Coins">
                        <span className="flex items-center gap-1">
                            <CoinIcon />
                            {event.total_koin}
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
