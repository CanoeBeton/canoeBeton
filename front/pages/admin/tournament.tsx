import React from 'react'
import AdminPage from '../../src/ui/admin/AdminPage'
import { Tournament } from '../../src/domain/Tournament'

const tournament = () => {
  const allTournaments: Tournament[] = [
    { name: 'CQI', date: '22/03/2023', image: '', id: '1' },
    { name: 'CCI', date: '22/07/2023', image: '', id: '2' },
  ]
  return (
    <div>
      <div>
        <AdminPage what="tournament" allEntities={allTournaments} />{' '}
      </div>
    </div>
  )
}

export default tournament
