import React from 'react'
import AdminPage from '../../src/ui/admin/AdminPage'
import { getTournaments, deleteTournaments } from '../../src/api/tournament'
import { useQuery } from 'react-query'

const tournament = () => {
  const { data: allTournaments, status } = useQuery({
    queryFn: () => getTournaments(),
  })

  return (
    <div>
      {status === 'success' ? (
        <AdminPage
          what="tournament"
          allEntities={allTournaments}
          deleteAllFunc={deleteTournaments}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default tournament
