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
