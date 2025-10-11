import React from "react";

import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import EventButton from "../buttons/event-button";

interface EventProps {
    singleEvent: {
        title: string;
        description: string;
        date: string;
        image: string;
        status: string;
    };
}

export default function EventHighlightCard({ singleEvent }: EventProps) {
    const event = singleEvent;

    return (
        <Card shadow="sm" radius="lg">
            <Image
                src={event.image}
                alt={event.title}
                width={'100%'}
                radius="lg"
                className="w-full h-[200px] object-cover"
            />
            <CardBody className="p-4">
                <h3 className="text-secondary font-semibold text-base md:text-[20px] mb-1">
                    {event.title}
                </h3>
                <p className="text-sm md:text-base text-secondary/80 leading-relaxed mb-1">
                    {event.description}
                </p>
                <h5 className="text-secondary font-semibold text-base md:text-[20px] mb-1">
                    {event.date}
                </h5>
            </CardBody>
            <CardFooter className="p-4 pt-1">
                <EventButton status={event.status} />
            </CardFooter>
        </Card>
    );
}
