import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getEvent } from '../../../src/api/event'
import { useQuery } from 'react-query'

const TournamentInfo = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }
  const { data: event, status } = useQuery({ queryFn: () => getEvent(id) })
  return (
    <div>
      <Link href="/admin/tournament">Retour</Link>
      {status === 'success' ? (
        <div>
          <div>{event.name}</div>
          <div>{event.description}</div>
          <div>
            {event.begin_date} - {event.end_date}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default TournamentInfo
