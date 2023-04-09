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

export const deleteTournament = async (id: string) => {
  await api
    .delete(`tournament/${id}`)
    .then((response) => {
      console.log(`${id} deleted`)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const deleteTournaments = async (ids: string[]) => {
  for (const id of ids) {
    await deleteTournament(id)
  }
}

export const modifyTournament = async (tournament: Tournament) => {
  console.log(tournament)
  await api
    .put(`tournament/${tournament.id}`, tournament)
    .then((response) => {
      console.log(`${tournament} modified`)
    })
    .catch((error) => {
      console.log(error)
    })
}
