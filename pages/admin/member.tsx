import React from 'react'
import AdminPage from '../../src/ui/admin/AdminPage'
import { getMembers, deleteMembers } from '../../src/api/member'
import { useQuery } from 'react-query'

const member = () => {
  const { data: allMembers, status } = useQuery({ queryFn: () => getMembers() })

  return (
    <div>
      {status === 'success' ? (
        <AdminPage
          what="member"
          allEntities={allMembers}
          deleteAllFunc={deleteMembers}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default member
