import React from 'react'

import { Autocomplete, AutocompleteItem } from '@heroui/react';

export default function EventAutocomplete() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Autocomplete
                label="Event Type"
                variant="flat"
                radius="full"
                size='sm'
            >
                <AutocompleteItem key="seminar">Seminar</AutocompleteItem>
                <AutocompleteItem key="competition">Competition</AutocompleteItem>
                <AutocompleteItem key="workshop">Workshop</AutocompleteItem>
                <AutocompleteItem key="talkshow">Talkshow</AutocompleteItem>
                <AutocompleteItem key="festival">Festival</AutocompleteItem>
            </Autocomplete>

            <Autocomplete
                label="Location"
                variant="flat"
                radius="full"
                size='sm'
            >
                <AutocompleteItem key="online">Online</AutocompleteItem>
                <AutocompleteItem key="campus">Campus</AutocompleteItem>
            </Autocomplete>

            <Autocomplete
                label="Status"
                variant="flat"
                radius="full"
                size='sm'
            >
                <AutocompleteItem key="upcoming">Upcoming</AutocompleteItem>
                <AutocompleteItem key="ongoing">Ongoing</AutocompleteItem>
                <AutocompleteItem key="ended">Ended</AutocompleteItem>
            </Autocomplete>
        </div>
    )
}
