import { Boat } from '../domain/Boat'
import { api } from './api'

export const getBoats = async (): Promise<Boat[]> => {
  const boatResponse = await api()
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
  const boatResponse = await api()
    .get(`boat/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  return boatResponse
}

export const deleteBoat = async (id: string) => {
  await api()
    .delete(`boat/${id}`)
    .then((response) => {
      console.log(`${id} deleted`)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const deleteBoats = async (ids: string[]) => {
  for (const id of ids) {
    await deleteBoat(id)
  }
}

export const modifyBoat = async (boat: Boat) => {
  console.log(boat)
  await api()
    .put(`boat/${boat.name}`, boat)
    .then((response) => {
      console.log(`${boat} modified`)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const addBoat = async (boat: {}) => {
  await api()
    .post('boat', boat)
    .then((response) => {
      console.log(`${boat} added`)
    })
    .catch((error) => {
      console.log(error)
    })
}
