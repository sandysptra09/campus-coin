'use client';

import React from 'react'

import SearchField from '../../inputs/search-field';
import EventAutocomplete from '../../autocomplete/event-autocomplete';
import EventCard from '../../cards/event-card';
import EventPagination from '../../paginations/event-pagination';

export default function AllEvent() {
    return (
        <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-12">
            <div className="text-center flex flex-col gap-2">
                <p className="text-md text-secondary md:text-[25px] font-medium tracking-wide">
                    All Events
                </p>
                <p className="text-secondary text-base leading-[25px]">
                    Discover all campus activities and join exciting opportunities!
                </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:flex-1">
                    <SearchField />
                </div>
                <EventAutocomplete />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(9)].map((_, i) => (
                    <EventCard key={i} />
                ))}
            </div>
            <EventPagination />
        </section>
    )
}
