import events from '../data/events.json'

export async function getEvents() {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return events;
}