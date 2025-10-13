'use client';

import React, { useState, useEffect, useMemo } from 'react'

import { Skeleton, Card } from '@heroui/react';
import SearchField from '../../inputs/search-field';
import EventAutocomplete from '../../autocomplete/event-autocomplete';
import EventCard from '../../cards/event-card';
import EventPagination from '../../paginations/event-pagination';
import { getEvents } from '@/lib/getEvents';
import { Event } from '@/interfaces/event';

export default function AllEvent() {
    const [events, setEvents] = useState<Event[]>([])
    const [loading, setLoading] = useState(true)

    const [search, setSearch] = useState('')
    const [filters, setFilters] = useState({
        type: '',
        location: '',
        status: '',
    })

    useEffect(() => {
        async function fetchData() {
            const data = await getEvents()
            setEvents(data)
            setLoading(false)
        }
        fetchData()
    }, [])

    const handleFilterChange = (key: string, value: string) => {
        setFilters((prev) => ({ ...prev, [key]: value }))
    }

    const filteredEvents = useMemo(() => {
        return events.filter((event) => {
            const matchesSearch =
                event.nama_event.toLowerCase().includes(search.toLowerCase()) ||
                event.tagline.toLowerCase().includes(search.toLowerCase())

            const matchesType = filters.type ? event.tipe_event === filters.type : true
            const matchesLocation = filters.location ? event.lokasi === filters.location : true
            const matchesStatus = filters.status ? event.status === filters.status : true

            return matchesSearch && matchesType && matchesLocation && matchesStatus
        })
    }, [events, search, filters])

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
                    <SearchField value={search} onChange={setSearch} />
                </div>
                <EventAutocomplete
                    type={filters.type}
                    location={filters.location}
                    status={filters.status}
                    onFilterChange={handleFilterChange}
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    [...Array(9)].map((_, i) => (
                        <Card key={i} shadow="sm" radius="lg" className="w-full">
                            <Skeleton className="h-[180px] w-full rounded-t-lg" />
                            <div className="p-4 space-y-3">
                                <Skeleton className="h-4 w-3/4 rounded-md" />
                                <Skeleton className="h-3 w-1/2 rounded-md" />
                                <div className="flex gap-2">
                                    <Skeleton className="h-3 w-1/4 rounded-md" />
                                    <Skeleton className="h-3 w-1/4 rounded-md" />
                                </div>
                            </div>
                        </Card>
                    ))
                ) : filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">No events found.</p>
                )}
            </div>
            <EventPagination />
        </section>
    )
}
