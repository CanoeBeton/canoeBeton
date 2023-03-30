import { Tournament } from '../domain/Tournament'
import { api } from './api'

export const getTournaments = async (): Promise<Tournament[]> => {
  const tournamentResponse = await api
    .get('tournament')
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  return tournamentResponse
}

export const getTournament = async (id: string): Promise<Tournament> => {
  const tournamentResponse = await api
    .get(`tournament/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  return tournamentResponse
}
