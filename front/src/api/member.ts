import { Member } from '../domain/Member'
import { api } from './api'

export const getMembers = async (): Promise<Member[]> => {
  const memberResponse = await api()
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
  const memberResponse = await api()
    .get(`member/${id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })

  return memberResponse
}

export const deleteMember = async (id: string) => {
  await api()
    .delete(`member/${id}`)
    .then((response) => {
      console.log(`${id} deleted`)
    })
    .catch((error) => {
      console.log(error)
    })
}

export const deleteMembers = async (ids: string[]) => {
  for (const id of ids) {
    await deleteMember(id)
  }
}

export const modifyMember = async (member: Member) => {
  await api()
    .put(`member/${member.id}`, member)
    .then((response) => {
      console.log(`${member} modified`)
    })
    .catch((error) => {
      console.log(error)
    })
}
