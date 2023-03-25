import { Member } from '../domain/Member'
import { api } from './api'

export const getMembers = async (): Promise<Member[]> => {
  const memberResponse = await api
    .get('member')
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  return memberResponse
}

export const getMember = async (id: string): Promise<Member> => {
  const memberResponse = await api
    .get(`member/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  return memberResponse
}
