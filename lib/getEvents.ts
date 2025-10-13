import events from '../data/events.json'
import { Event } from '@/interfaces/event';

export async function getEvents() {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return events as Event[];
}