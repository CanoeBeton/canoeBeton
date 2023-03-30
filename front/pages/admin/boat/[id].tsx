import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getBoat } from '../../../src/api/boat'
import { useQuery } from 'react-query'

const BoatInfo = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }

  const { data: boat, status } = useQuery({ queryFn: () => getBoat(id) })
  return (
    <div>
      <Link href="/admin/boat">Retour</Link>

      {status === 'success' ? (
        <div>
          <div>{boat.name}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default BoatInfo
