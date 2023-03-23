import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const BoatInfo = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <Link href="/admin/boat">Retour</Link>
    </div>
  )
}

export default BoatInfo
