import React from 'react'
import AdminPage from '../../src/ui/admin/AdminPage'
import { getEvents, deleteEvents } from '../../src/api/event'
import { useQuery } from 'react-query'

const event = () => {
  const { data: allEvents, status } = useQuery({ queryFn: () => getEvents() })

  return (
    <div>
      {status === 'success' ? (
        <AdminPage
          what="event"
          allEntities={allEvents}
          deleteAllFunc={deleteEvents}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default event
