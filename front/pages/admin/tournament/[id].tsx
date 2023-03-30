import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getTournament } from '../../../src/api/tournament'
import { useQuery } from 'react-query'

const TournamentInfo = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }
  const { data: tournament, status } = useQuery({
    queryFn: () => getTournament(id),
  })
  return (
    <div>
      <Link href="/admin/tournament">Retour</Link>
      {status === 'success' ? (
        <div>
          <div>{tournament.name}</div>
          <div>{tournament.date}</div>
          <p>Image path:{tournament.imagePath}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default TournamentInfo
