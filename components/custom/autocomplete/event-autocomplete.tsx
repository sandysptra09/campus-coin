import React from 'react'

import { Autocomplete, AutocompleteItem } from '@heroui/react';

interface EventAutocompleteProps {
    type: string
    location: string
    status: string
    onFilterChange: (key: string, value: string) => void
}

export default function EventAutocomplete({ type, location, status, onFilterChange
}: EventAutocompleteProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Autocomplete
                label="Event Type"
                variant="flat"
                radius="full"
                selectedKey={type || undefined}
                onSelectionChange={(key) =>
                    onFilterChange('type', key ? String(key) : '')
                }
                allowsEmptyCollection
                isClearable
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
                selectedKey={location || undefined}
                onSelectionChange={(key) =>
                    onFilterChange('location', key ? String(key) : '')
                }
                isClearable
            >
                <AutocompleteItem key="online">Online</AutocompleteItem>
                <AutocompleteItem key="campus">Campus</AutocompleteItem>
            </Autocomplete>

            <Autocomplete
                label="Status"
                variant="flat"
                radius="full"
                size='sm'
                selectedKey={status || undefined}
                onSelectionChange={(key) =>
                    onFilterChange('status', key ? String(key) : '')
                }
                isClearable
            >
                <AutocompleteItem key="upcoming">Upcoming</AutocompleteItem>
                <AutocompleteItem key="ongoing">Ongoing</AutocompleteItem>
                <AutocompleteItem key="ended">Ended</AutocompleteItem>
            </Autocomplete>
        </div>
    )
}
