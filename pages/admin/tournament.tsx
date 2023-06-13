import React from 'react'
import AdminPage from '../../src/ui/admin/AdminListView'
import { getTournaments, deleteTournaments } from '../../src/api/tournament'
import { useQuery } from 'react-query'

const Tournament = () => {
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
          keyPropriety="id"
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Tournament
