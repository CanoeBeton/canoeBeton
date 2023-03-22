import React from 'react'
import AdminPage from '../../src/ui/admin/AdminPage'
import { Member } from '../../src/domain/Member'

const member = () => {
  const allMembers: Member[] = [
    {
      id: '1',
      name: 'Jean',
      role: 'admin',
      description: "Jean est un membre de l'association",
      image: 'https://picsum.photos/200/300',
    },
    {
      id: '2',
      name: 'Jean2',
      role: 'pas un admin',
      description: "Jean n'est pas un membre de l'association",
      image: 'https://picsum.photos/200/300',
    },
  ]

  return (
    <div>
      <AdminPage what="member" allEntities={allMembers} />
    </div>
  )
}

export default member
