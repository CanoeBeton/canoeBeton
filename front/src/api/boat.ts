import { Boat } from '../domain/Boat'
import { api } from './api'

export const getBoats = async (): Promise<Boat[]> => {
  const boatResponse = await api
    .get('boat')
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  return boatResponse
}

export const getBoat = async (id: string): Promise<Boat> => {
  const boatResponse = await api
    .get(`boat/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  return boatResponse
}
