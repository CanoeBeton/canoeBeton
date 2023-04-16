import { Melange } from '../domain/Melange'
import { api } from './api'

export const getMelangesByBoat = async (
  boatName: string
): Promise<Melange[]> => {
  const melangeResponse = await api()
    .get(`/melange/${boatName}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  return melangeResponse
}

export const updateMelange = async (melange: Melange) => {
  await api()
    .put(`/melange`, melange)
    .then((response) => {})
    .catch((error) => {})
}

export const addMelange = async (melange: Melange) => {
  console.log(melange)
  await api()
    .post(`/melange`, melange)
    .then((response) => {})
    .catch((error) => {
      console.log(error)
    })
}

export const addMelanges = async (melanges: Melange[]) => {
  for (const melange of melanges) {
    await addMelange(melange)
  }
}
