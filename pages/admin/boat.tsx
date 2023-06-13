import React from 'react'
import AdminPage from '../../src/ui/admin/AdminListView'
import { getBoats, deleteBoats } from '../../src/api/boat'
import { useQuery } from 'react-query'
const Boat = () => {
  const { data: allBoats, status } = useQuery({ queryFn: () => getBoats() })

  return (
    <div>
      {status === 'success' ? (
        <AdminPage
          what="boat"
          allEntities={allBoats}
          deleteAllFunc={deleteBoats}
          keyPropriety="name"
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Boat
