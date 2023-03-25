import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { getMember } from '../../../src/api/member'
import { useQuery } from 'react-query'
import Link from 'next/link'

const MemberInfo = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }

  const { data: member, status } = useQuery({ queryFn: () => getMember(id) })

  return (
    <div>
      <Link href="/admin/member">Retour</Link>

      {status === 'success' ? (
        <div>
          <div>{member.name}</div>
          <div>{member.description}</div>
          <div>{member.role}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default MemberInfo
