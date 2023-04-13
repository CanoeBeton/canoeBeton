import { api } from './api'
import { Event } from '../domain/Event'

export const getEvents = async (): Promise<Event[]> => {
  const eventResponse = await api()
    .get('event')
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  return eventResponse
}

export const getEvent = async (id: string): Promise<Event> => {
  const eventResponse = await api()
    .get(`event/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  return eventResponse
}

export const deleteEvent = async (id: string) => {
  await api()
    .delete(`event/${id}`)
    .then((response) => {})
    .catch((error) => {
      console.log(error)
    })
}

export const deleteEvents = async (ids: string[]) => {
  for (const id of ids) {
    await deleteEvent(id)
  }
}

export const modifyEvent = async (event: Event) => {
  const response = await api().put(`event/${event.id}`, event)
  return response.data
}
