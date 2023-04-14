import { api } from './api'
import { Partenaire } from '../domain/Partenaire'

export const getPartenaire = async (active: boolean): Promise<Partenaire[]> => {
  const config = {
    headers: {
      active: active,
    },
  }
  const response = await api().get('partenaire', config)

  return response.data
}

export const getPartenaireByName = async (
  name: string
): Promise<Partenaire> => {
  const response = await api().get(`partenaire/${name}`)
  return response.data
}

export const deletePartenaire = async (id: string) => {
  await api()
    .delete(`partenaire/${id}`)
    .then((response) => {
      console.log(`${id} deleted`)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const deletePartenaires = async (ids: string[]) => {
  for (const id of ids) {
    await deletePartenaire(id)
  }
}

export const modifyPartenaire = async (
  partenaire: Partenaire,
  active: boolean
) => {
  const response = await api().put(`partenaire/${partenaire.name}`, partenaire)
  const response2 = await api().post(
    `partenaire/${partenaire.name}/${active ? 'activate' : 'deactivate'}`
  )
}
