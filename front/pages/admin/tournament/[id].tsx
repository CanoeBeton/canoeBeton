import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const TournamentInfo = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <Link href="/admin/tournament">Retour</Link>
    </div>
  )
}

export default TournamentInfo
