import React from 'react'
import AdminPage from '../../src/ui/admin/AdminListView'
import { getMembers, deleteMembers } from '../../src/api/member'
import { useQuery } from 'react-query'

const Member = () => {
  const { data: allMembers, status } = useQuery({ queryFn: () => getMembers() })

  return (
    <div>
      {status === 'success' ? (
        <AdminPage
          what="member"
          allEntities={allMembers}
          deleteAllFunc={deleteMembers}
          keyPropriety="id"
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Member
