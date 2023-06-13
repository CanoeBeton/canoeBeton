import React from 'react'
import AdminPage from '../../src/ui/admin/AdminListView'
import { getEvents, deleteEvents } from '../../src/api/event'
import { useQuery } from 'react-query'

const Event = () => {
  const { data: allEvents, status } = useQuery({ queryFn: () => getEvents() })

  return (
    <div>
      {status === 'success' ? (
        <AdminPage
          what="event"
          allEntities={allEvents}
          deleteAllFunc={deleteEvents}
          keyPropriety="id"
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default Event
