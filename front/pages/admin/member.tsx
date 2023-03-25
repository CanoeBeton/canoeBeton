import React from 'react'
import AdminPage from '../../src/ui/admin/AdminPage'
import { Member } from '../../src/domain/Member'
import { getMembers } from '../../src/api/member'

const member = () => {
  const [allMembers, setAllMembers] = React.useState<Member[]>([])
  getMembers().then((members) => {
    return (
      <div>
        <AdminPage what="member" allEntities={members} />
      </div>
    )
  })

  return (
    <div>
      <AdminPage what="member" allEntities={allMembers} />
    </div>
  )
}

export default member
