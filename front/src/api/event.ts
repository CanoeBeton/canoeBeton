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
