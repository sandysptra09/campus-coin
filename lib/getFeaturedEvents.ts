import events from '../data/events.json'
import { Event } from '@/interfaces/event'

export async function getFeaturedEvents(type: 'popular' | 'rewarding'): Promise<Event[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))

  const typedEvents = events as Event[]

  if (type === 'popular') {
    return typedEvents
      .filter((event) => event.status === 'upcoming' || event.status === 'ongoing')
      .sort((a, b) => {
        if (b.total_partisipasi !== a.total_partisipasi)
          return b.total_partisipasi - a.total_partisipasi
        return new Date(b.tanggal_mulai_event).getTime() - new Date(a.tanggal_mulai_event).getTime()
      })
      .slice(0, 6)
  }

  if (type === 'rewarding') {
    return typedEvents
      .filter((event) => event.status === 'upcoming' || event.status === 'ongoing')
      .sort((a, b) => b.total_koin - a.total_koin)
      .slice(0, 6)
  }

  return []
}
