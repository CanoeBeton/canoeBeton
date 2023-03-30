import React from 'react'
import AdminPage from '../../src/ui/admin/AdminPage'
import { getBoats } from '../../src/api/boat'
import { useQuery } from 'react-query'
const boat = () => {
  const { data: allBoats, status } = useQuery({ queryFn: () => getBoats() })

  return (
    <div>
      {status === 'success' ? (
        <AdminPage what="boat" allEntities={allBoats} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default boat
